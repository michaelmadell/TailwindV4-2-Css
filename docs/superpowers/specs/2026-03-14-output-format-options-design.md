# Output Format Options — Design Spec

**Date:** 2026-03-14
**Project:** twcss2css (Tailwind v4 → CSS converter)
**Scope:** Add output format controls to the CSS Output card in `index.html`

---

## Goal

Let users choose how the generated CSS is formatted, so they can copy output that is immediately usable in their own stylesheet without manual reformatting.

---

## Modes

### Flat (default — current behaviour)
Properties are emitted without a wrapping selector. State groups use a `/* pseudo */` comment header. Media groups use a `/* @media query */` comment header. Media+state combinations use a combined `/* @media query :pseudo */` comment header.

```css
background-color: #3b82f6;
padding: 1rem;

/* :hover */
background-color: #2563eb;

/* @media (min-width: 640px) */
  font-size: 1.125rem;

/* @media (min-width: 640px) :hover */
  color: #2563eb;
```

### Scoped
All rules are wrapped in proper CSS rule-sets using a user-supplied selector.

```css
/* base */
.card {
  background-color: #3b82f6;
  padding: 1rem;
}

/* state */
.card:hover {
  background-color: #2563eb;
}

/* media query */
@media (min-width: 640px) {
  .card {
    font-size: 1.125rem;
  }
}

/* media + state combined */
@media (min-width: 640px) {
  .card:hover {
    font-size: 1.125rem;
  }
}
```

### Scoped + Minified
Same as Scoped but collapsed to a single line. Minification removes all newlines, strips spaces around `{`, `}`, `:`, `;`, and `,`. Spaces inside property values are preserved.

```css
.card{background-color:#3b82f6;padding:1rem}.card:hover{background-color:#2563eb}@media (min-width:640px){.card{font-size:1.125rem}.card:hover{color:#2563eb}}
```

Minify has **no effect in Flat mode**. The hidden state of the Minify checkbox when Flat is active is the sole enforcement mechanism.

---

## UI

Controls are added inside the **CSS Output** card, between the label and the `<pre>` output element.

```
[ Flat ]  [ Scoped ]

Selector: [ .card         ]   ☑ Minify
(shown only when Scoped is active)
```

- **Mode toggle:** Two buttons styled as a segmented control (`Flat` / `Scoped`). Active mode highlighted with the accent colour. Uses `aria-pressed`.
- **Selector input + Minify checkbox:** Both are **hidden** (not visible, not tab-reachable) when Flat mode is active. They become visible when Scoped is active. This keeps state management simple: there is no disabled-but-visible state to track.
- **Selector input:** Default value `.element`. Placeholder `.element`. Falls back to `.element` for rendering when the field is empty.
- **Minify checkbox:** Unchecked by default. Checked state is preserved when user switches between Flat and Scoped (it just has no effect in Flat mode).

---

## Behaviour

| Action | Re-renders? | Notes |
|---|---|---|
| Switch Flat ↔ Scoped | Yes, immediately | Selector + Minify row toggled hidden/visible |
| Edit selector input | Yes, debounced 150 ms | Same debounce pattern as main class input |
| Toggle Minify checkbox | Yes, immediately | Single boolean flip; no typing involved |
| Copy CSS | — | Copies current output; no-ops silently if output is the placeholder string |

---

## Security

The selector value is **never injected into the DOM as HTML**. It is concatenated into a plain CSS string that is assigned to `textContent`. This prevents XSS, but a malformed selector could produce broken CSS output. Strip the following characters from the selector before use:

```
" ' < > { } ;
```

Apply the strip inside `formatOutput`, not in the input event handler — the raw user value is preserved in the field. The CSS output will reflect the sanitised selector, which is acceptable (the discrepancy is intentional and minor). If the stripped result is empty, fall back to `.element`.

---

## Persistence

All three preferences are saved to `localStorage` on change and restored **at page load, before the first `render()` call**. Missing keys silently fall back to defaults. After restoring values, UI controls (button `aria-pressed`, checkbox state, input value, scoped-options visibility) are initialised to match before render runs.

| Key | Values | Default |
|---|---|---|
| `twcss-format` | `'flat'` \| `'scoped'` | `'flat'` |
| `twcss-selector` | any string | `'.element'` |
| `twcss-minify` | `'true'` \| `'false'` | `'false'` |

---

## Implementation

### Data contract: `groups` object

`groups` is the object returned by the existing `convert(classes)` function:

```js
{
  base:   { [cssProp]: value, ... },           // flat rules with no prefix
  states: { [pseudoSelector]: { [cssProp]: value } },  // e.g. ':hover' → { color: '...' }
  media:  {                                    // e.g. '(min-width: 640px)'
    [mediaQuery]: {
      base:   { [cssProp]: value },
      states: { [pseudoSelector]: { [cssProp]: value } }
    }
  },
  unknown: string[]
}
```

### New function: `formatOutput(groups, mode, selector, minify)`

- **`mode`**: `'flat'` | `'scoped'`
- **`selector`**: string (already sanitised)
- **`minify`**: boolean (only applied when `mode === 'scoped'`)
- Returns a CSS string, or `''` if all groups are empty.

**Flat path** — identical to current `render()` inline logic.

**Scoped path:**

```
rawSelector = selector.trim()
sanitised   = strip(rawSelector, ['"', "'", '<', '>', '{', '}', ';']).trim()
effectiveSel = sanitised || '.element'   // fallback if raw was empty OR all chars stripped

parts = []
if base has entries:   parts.push(effectiveSel + " {\n" + indent(props) + "\n}")
for each state:        parts.push(effectiveSel + state + " {\n" + indent(props) + "\n}")
sort media by BP_ORDER
for each mediaQuery:
  inner = []
  if group.base:    inner.push("  " + effectiveSel + " {\n" + indent(props, 4) + "\n  }")
  for each state:   inner.push("  " + effectiveSel + state + " {\n" + indent(props, 4) + "\n  }")
    // → produces e.g. @media (min-width: 640px) { .card:hover { font-size: 1.125rem; } }
  parts.push("@media " + mediaQuery + " {\n" + inner.join("\n\n") + "\n}")

result = parts.join("\n\n")
if minify: collapse whitespace runs to single space, remove newlines, strip space after { and before }
```

**Unknown classes:** In both Flat and Scoped modes, `unknown` classes are not rendered in the CSS string itself — they are shown separately in `warningsEl` (the existing `Unmapped: ...` warning element). `formatOutput` does not receive or handle `unknown`.

### Changes to `render()`

```js
function render() {
  const { base, states, media, unknown } = convert(inputEl.value);
  const sel = selectorInput.value;  // raw; sanitisation happens inside formatOutput
  const css = formatOutput({ base, states, media }, formatMode, sel, minifyEnabled);
  // When formatOutput returns '' (all groups empty), assign the placeholder so
  // the Copy button no-op guard (=== '/* CSS will appear here */') continues to work.
  outputEl.textContent = css || '/* CSS will appear here */';
  warningsEl.textContent = unknown.length ? `Unmapped: ${unknown.join(', ')}` : '';
}
```

### `applyFormatMode(mode)`

Helper called whenever mode changes (on load and on button click):
```js
function applyFormatMode(mode) {
  formatMode = mode;
  fmtFlatBtn.setAttribute('aria-pressed', String(mode === 'flat'));
  fmtScopedBtn.setAttribute('aria-pressed', String(mode === 'scoped'));
  scopedOptions.hidden = (mode !== 'scoped');
  localStorage.setItem('twcss-format', mode);
}
```

### Load / restore sequence

```js
// On DOMContentLoaded, before first render():
formatMode          = localStorage.getItem('twcss-format')    || 'flat';
selectorInput.value = localStorage.getItem('twcss-selector')  || '.element';
minifyEnabled       = localStorage.getItem('twcss-minify') === 'true';  // string 'true' → boolean true
applyFormatMode(formatMode);   // sets aria-pressed + hidden, saves to localStorage
minifyCheck.checked = minifyEnabled;
// render() is called after this block, as before
```

**Mode ↔ Minify round-trip:** The minify checkbox state is always preserved in the JS variable `minifyEnabled`. Switching to Flat hides the checkbox but does not reset `minifyEnabled`. Switching back to Scoped reveals the checkbox in its last state, and the output is immediately minified if the checkbox was checked.

### Debounce strategy

Two separate debounce timers, both using the same 150 ms delay:
- **`debounceTimer`** (existing) — fires when the main Tailwind classes textarea changes
- **`selectorDebounceTimer`** (new) — fires when `selectorInput` changes

Both ultimately call the same `render()` function. Mode switches and Minify toggles call `render()` directly (no debounce) since they are single-event actions with no keyboard repeat risk.

### Copy CSS no-op condition

The Copy button no-ops when `outputEl.textContent === '/* CSS will appear here */'` (the exact placeholder string assigned by `render()` when `formatOutput` returns `''`). This matches the existing behaviour of the Copy button.

### New HTML (inside CSS Output card)

```html
<div class="format-row">
  <div class="format-toggle" role="group" aria-label="Output format">
    <button id="fmtFlat"   class="fmt-btn" aria-pressed="true">Flat</button>
    <button id="fmtScoped" class="fmt-btn" aria-pressed="false">Scoped</button>
  </div>
  <div id="scopedOptions" class="scoped-options" hidden>
    <label for="selectorInput" class="label">Selector</label>
    <input id="selectorInput" type="text" value=".element" placeholder=".element" spellcheck="false">
    <label class="minify-label">
      <input id="minifyCheck" type="checkbox"> Minify
    </label>
  </div>
</div>
```

### New CSS

```css
/* Ensure the HTML 'hidden' attribute is not overridden by display:flex on .scoped-options */
[hidden] { display: none !important; }

.format-row    { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 8px; }
.format-toggle { display: flex; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.fmt-btn       { background: transparent; border: none; color: var(--muted); padding: 4px 10px;
                 font-weight: 600; font-size: 12px; border-radius: 0; cursor: pointer; }
.fmt-btn[aria-pressed="true"] { background: var(--accent); color: #fff; }
.scoped-options { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
/* min-width allows the field to grow; no max-width cap needed at this scale */
.scoped-options input[type="text"] { min-height: unset; font-size: 13px; padding: 4px 8px;
                                     min-width: 120px; width: auto; resize: none; }
.minify-label  { display: flex; align-items: center; gap: 4px; font-size: 13px; cursor: pointer; }
```

---

## Out of Scope

- Syntax highlighting in the output
- Per-property comments explaining what each utility does
- Multiple selector support (e.g., comma-separated)
- Exporting to a `.css` file
