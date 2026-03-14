// ─── Spacing scale (Tailwind default) ────────────────────────────────────────
const spacingScale = {
  '0': '0rem', '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem',
  '2': '0.5rem', '2.5': '0.625rem', '3': '0.75rem', '3.5': '0.875rem',
  '4': '1rem', '5': '1.25rem', '6': '1.5rem', '7': '1.75rem',
  '8': '2rem', '9': '2.25rem', '10': '2.5rem', '11': '2.75rem',
  '12': '3rem', '14': '3.5rem', '16': '4rem', '20': '5rem',
  '24': '6rem', '28': '7rem', '32': '8rem', '36': '9rem',
  '40': '10rem', '44': '11rem', '48': '12rem', '52': '13rem',
  '56': '14rem', '60': '15rem', '64': '16rem', '72': '18rem',
  '80': '20rem', '96': '24rem'
};

// ─── Color palette ────────────────────────────────────────────────────────────
const colorScale = {
  slate:   { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
  gray:    { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827' },
  zinc:    { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b' },
  neutral: { 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717' },
  stone:   { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917' },
  red:     { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
  orange:  { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12' },
  amber:   { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' },
  yellow:  { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12' },
  lime:    { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314' },
  green:   { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
  emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b' },
  teal:    { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
  cyan:    { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
  sky:     { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
  blue:    { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
  indigo:  { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
  violet:  { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
  purple:  { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
  fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
  pink:    { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
  rose:    { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' }
};

const keywordColors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit'
};

// ─── Direct class → CSS property map ─────────────────────────────────────────
const directMap = {
  // Display
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'inline': { display: 'inline' },
  'flex': { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  'grid': { display: 'grid' },
  'inline-grid': { display: 'inline-grid' },
  'table': { display: 'table' },
  'hidden': { display: 'none' },
  'contents': { display: 'contents' },
  'flow-root': { display: 'flow-root' },
  // Visibility
  'visible': { visibility: 'visible' },
  'invisible': { visibility: 'hidden' },
  'collapse': { visibility: 'collapse' },
  // Position
  'static': { position: 'static' },
  'relative': { position: 'relative' },
  'absolute': { position: 'absolute' },
  'fixed': { position: 'fixed' },
  'sticky': { position: 'sticky' },
  // Inset shortcuts
  'inset-0': { inset: '0px' },
  'inset-auto': { inset: 'auto' },
  'top-0': { top: '0px' }, 'top-auto': { top: 'auto' },
  'right-0': { right: '0px' }, 'right-auto': { right: 'auto' },
  'bottom-0': { bottom: '0px' }, 'bottom-auto': { bottom: 'auto' },
  'left-0': { left: '0px' }, 'left-auto': { left: 'auto' },
  // Z-index
  'z-0': { 'z-index': '0' },
  'z-10': { 'z-index': '10' },
  'z-20': { 'z-index': '20' },
  'z-30': { 'z-index': '30' },
  'z-40': { 'z-index': '40' },
  'z-50': { 'z-index': '50' },
  'z-auto': { 'z-index': 'auto' },
  // Overflow
  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-clip': { overflow: 'clip' },
  'overflow-x-auto': { 'overflow-x': 'auto' },
  'overflow-x-hidden': { 'overflow-x': 'hidden' },
  'overflow-x-scroll': { 'overflow-x': 'scroll' },
  'overflow-x-visible': { 'overflow-x': 'visible' },
  'overflow-y-auto': { 'overflow-y': 'auto' },
  'overflow-y-hidden': { 'overflow-y': 'hidden' },
  'overflow-y-scroll': { 'overflow-y': 'scroll' },
  'overflow-y-visible': { 'overflow-y': 'visible' },
  // Flexbox
  'flex-1': { flex: '1 1 0%' },
  'flex-auto': { flex: '1 1 auto' },
  'flex-none': { flex: 'none' },
  'flex-row': { 'flex-direction': 'row' },
  'flex-row-reverse': { 'flex-direction': 'row-reverse' },
  'flex-col': { 'flex-direction': 'column' },
  'flex-col-reverse': { 'flex-direction': 'column-reverse' },
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'flex-nowrap': { 'flex-wrap': 'nowrap' },
  'grow': { 'flex-grow': '1' },
  'grow-0': { 'flex-grow': '0' },
  'shrink': { 'flex-shrink': '1' },
  'shrink-0': { 'flex-shrink': '0' },
  'self-auto': { 'align-self': 'auto' },
  'self-start': { 'align-self': 'flex-start' },
  'self-end': { 'align-self': 'flex-end' },
  'self-center': { 'align-self': 'center' },
  'self-stretch': { 'align-self': 'stretch' },
  'self-baseline': { 'align-self': 'baseline' },
  // Alignment
  'items-center': { 'align-items': 'center' },
  'items-start': { 'align-items': 'flex-start' },
  'items-end': { 'align-items': 'flex-end' },
  'items-baseline': { 'align-items': 'baseline' },
  'items-stretch': { 'align-items': 'stretch' },
  'justify-center': { 'justify-content': 'center' },
  'justify-start': { 'justify-content': 'flex-start' },
  'justify-end': { 'justify-content': 'flex-end' },
  'justify-between': { 'justify-content': 'space-between' },
  'justify-around': { 'justify-content': 'space-around' },
  'justify-evenly': { 'justify-content': 'space-evenly' },
  'justify-stretch': { 'justify-content': 'stretch' },
  'content-start': { 'align-content': 'flex-start' },
  'content-end': { 'align-content': 'flex-end' },
  'content-center': { 'align-content': 'center' },
  'content-between': { 'align-content': 'space-between' },
  'content-around': { 'align-content': 'space-around' },
  'content-evenly': { 'align-content': 'space-evenly' },
  'place-items-start': { 'place-items': 'start' },
  'place-items-end': { 'place-items': 'end' },
  'place-items-center': { 'place-items': 'center' },
  'place-items-stretch': { 'place-items': 'stretch' },
  'place-content-center': { 'place-content': 'center' },
  'place-content-start': { 'place-content': 'start' },
  'place-content-end': { 'place-content': 'end' },
  'place-content-between': { 'place-content': 'space-between' },
  'place-content-around': { 'place-content': 'space-around' },
  'place-content-evenly': { 'place-content': 'space-evenly' },
  // Grid
  'col-span-full': { 'grid-column': '1 / -1' },
  'col-auto': { 'grid-column': 'auto' },
  'row-auto': { 'grid-row': 'auto' },
  // Margin auto shortcuts
  'm-auto': { margin: 'auto' },
  'mx-auto': { 'margin-left': 'auto', 'margin-right': 'auto' },
  'my-auto': { 'margin-top': 'auto', 'margin-bottom': 'auto' },
  'mt-auto': { 'margin-top': 'auto' },
  'mb-auto': { 'margin-bottom': 'auto' },
  'ml-auto': { 'margin-left': 'auto' },
  'mr-auto': { 'margin-right': 'auto' },
  // Pixel spacing shortcuts
  'p-px': { padding: '1px' },
  'm-px': { margin: '1px' },
  // Sizing
  'w-full': { width: '100%' },
  'w-screen': { width: '100vw' },
  'w-svw': { width: '100svw' },
  'w-auto': { width: 'auto' },
  'w-fit': { width: 'fit-content' },
  'w-max': { width: 'max-content' },
  'w-min': { width: 'min-content' },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-svh': { height: '100svh' },
  'h-auto': { height: 'auto' },
  'h-fit': { height: 'fit-content' },
  'h-max': { height: 'max-content' },
  'h-min': { height: 'min-content' },
  'size-full': { width: '100%', height: '100%' },
  'size-screen': { width: '100vw', height: '100vh' },
  'min-w-full': { 'min-width': '100%' },
  'min-w-0': { 'min-width': '0px' },
  'min-h-full': { 'min-height': '100%' },
  'min-h-screen': { 'min-height': '100vh' },
  'min-h-0': { 'min-height': '0px' },
  'max-w-none': { 'max-width': 'none' },
  'max-w-full': { 'max-width': '100%' },
  'max-w-screen': { 'max-width': '100vw' },
  'max-w-xs': { 'max-width': '20rem' },
  'max-w-sm': { 'max-width': '24rem' },
  'max-w-md': { 'max-width': '28rem' },
  'max-w-lg': { 'max-width': '32rem' },
  'max-w-xl': { 'max-width': '36rem' },
  'max-w-2xl': { 'max-width': '42rem' },
  'max-w-3xl': { 'max-width': '48rem' },
  'max-w-4xl': { 'max-width': '56rem' },
  'max-w-5xl': { 'max-width': '64rem' },
  'max-w-6xl': { 'max-width': '72rem' },
  'max-w-7xl': { 'max-width': '80rem' },
  'max-h-full': { 'max-height': '100%' },
  'max-h-screen': { 'max-height': '100vh' },
  // Typography
  'text-left': { 'text-align': 'left' },
  'text-center': { 'text-align': 'center' },
  'text-right': { 'text-align': 'right' },
  'text-justify': { 'text-align': 'justify' },
  'text-xs': { 'font-size': '0.75rem', 'line-height': '1rem' },
  'text-sm': { 'font-size': '0.875rem', 'line-height': '1.25rem' },
  'text-base': { 'font-size': '1rem', 'line-height': '1.5rem' },
  'text-lg': { 'font-size': '1.125rem', 'line-height': '1.75rem' },
  'text-xl': { 'font-size': '1.25rem', 'line-height': '1.75rem' },
  'text-2xl': { 'font-size': '1.5rem', 'line-height': '2rem' },
  'text-3xl': { 'font-size': '1.875rem', 'line-height': '2.25rem' },
  'text-4xl': { 'font-size': '2.25rem', 'line-height': '2.5rem' },
  'text-5xl': { 'font-size': '3rem', 'line-height': '1' },
  'text-6xl': { 'font-size': '3.75rem', 'line-height': '1' },
  'text-7xl': { 'font-size': '4.5rem', 'line-height': '1' },
  'text-8xl': { 'font-size': '6rem', 'line-height': '1' },
  'text-9xl': { 'font-size': '8rem', 'line-height': '1' },
  'font-thin': { 'font-weight': '100' },
  'font-extralight': { 'font-weight': '200' },
  'font-light': { 'font-weight': '300' },
  'font-normal': { 'font-weight': '400' },
  'font-medium': { 'font-weight': '500' },
  'font-semibold': { 'font-weight': '600' },
  'font-bold': { 'font-weight': '700' },
  'font-extrabold': { 'font-weight': '800' },
  'font-black': { 'font-weight': '900' },
  'italic': { 'font-style': 'italic' },
  'not-italic': { 'font-style': 'normal' },
  'underline': { 'text-decoration-line': 'underline' },
  'overline': { 'text-decoration-line': 'overline' },
  'line-through': { 'text-decoration-line': 'line-through' },
  'no-underline': { 'text-decoration-line': 'none' },
  'uppercase': { 'text-transform': 'uppercase' },
  'lowercase': { 'text-transform': 'lowercase' },
  'capitalize': { 'text-transform': 'capitalize' },
  'normal-case': { 'text-transform': 'none' },
  'truncate': { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' },
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-clip': { 'text-overflow': 'clip' },
  'whitespace-normal': { 'white-space': 'normal' },
  'whitespace-nowrap': { 'white-space': 'nowrap' },
  'whitespace-pre': { 'white-space': 'pre' },
  'whitespace-pre-line': { 'white-space': 'pre-line' },
  'whitespace-pre-wrap': { 'white-space': 'pre-wrap' },
  'break-normal': { 'word-break': 'normal', 'overflow-wrap': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  'break-all': { 'word-break': 'break-all' },
  'break-keep': { 'word-break': 'keep-all' },
  // Border radius
  'rounded-none': { 'border-radius': '0' },
  'rounded-sm': { 'border-radius': '0.125rem' },
  'rounded': { 'border-radius': '0.25rem' },
  'rounded-md': { 'border-radius': '0.375rem' },
  'rounded-lg': { 'border-radius': '0.5rem' },
  'rounded-xl': { 'border-radius': '0.75rem' },
  'rounded-2xl': { 'border-radius': '1rem' },
  'rounded-3xl': { 'border-radius': '1.5rem' },
  'rounded-full': { 'border-radius': '9999px' },
  // Border
  'border': { 'border-width': '1px' },
  'border-0': { 'border-width': '0px' },
  'border-2': { 'border-width': '2px' },
  'border-4': { 'border-width': '4px' },
  'border-8': { 'border-width': '8px' },
  'border-solid': { 'border-style': 'solid' },
  'border-dashed': { 'border-style': 'dashed' },
  'border-dotted': { 'border-style': 'dotted' },
  'border-double': { 'border-style': 'double' },
  'border-hidden': { 'border-style': 'hidden' },
  'border-none': { 'border-style': 'none', 'border-width': '0' },
  // Shadows
  'shadow-sm': { 'box-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  'shadow': { 'box-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  'shadow-md': { 'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  'shadow-lg': { 'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  'shadow-xl': { 'box-shadow': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)' },
  'shadow-2xl': { 'box-shadow': '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  'shadow-none': { 'box-shadow': 'none' },
  'shadow-inner': { 'box-shadow': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
  // Ring (simplified)
  'ring-0': { 'box-shadow': '0 0 0 0px rgb(59 130 246 / 0.5)' },
  'ring-1': { 'box-shadow': '0 0 0 1px rgb(59 130 246 / 0.5)' },
  'ring': { 'box-shadow': '0 0 0 3px rgb(59 130 246 / 0.5)' },
  'ring-2': { 'box-shadow': '0 0 0 2px rgb(59 130 246 / 0.5)' },
  'ring-4': { 'box-shadow': '0 0 0 4px rgb(59 130 246 / 0.5)' },
  'ring-8': { 'box-shadow': '0 0 0 8px rgb(59 130 246 / 0.5)' },
  'ring-inset': { 'box-shadow': 'inset 0 0 0 3px rgb(59 130 246 / 0.5)' },
  // Opacity
  'opacity-0': { opacity: '0' },
  'opacity-5': { opacity: '0.05' },
  'opacity-10': { opacity: '0.1' },
  'opacity-20': { opacity: '0.2' },
  'opacity-25': { opacity: '0.25' },
  'opacity-30': { opacity: '0.3' },
  'opacity-40': { opacity: '0.4' },
  'opacity-50': { opacity: '0.5' },
  'opacity-60': { opacity: '0.6' },
  'opacity-70': { opacity: '0.7' },
  'opacity-75': { opacity: '0.75' },
  'opacity-80': { opacity: '0.8' },
  'opacity-90': { opacity: '0.9' },
  'opacity-95': { opacity: '0.95' },
  'opacity-100': { opacity: '1' },
  // Cursor
  'cursor-auto': { cursor: 'auto' },
  'cursor-default': { cursor: 'default' },
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-wait': { cursor: 'wait' },
  'cursor-text': { cursor: 'text' },
  'cursor-move': { cursor: 'move' },
  'cursor-help': { cursor: 'help' },
  'cursor-not-allowed': { cursor: 'not-allowed' },
  'cursor-none': { cursor: 'none' },
  'cursor-grab': { cursor: 'grab' },
  'cursor-grabbing': { cursor: 'grabbing' },
  'cursor-crosshair': { cursor: 'crosshair' },
  // Pointer events & user select
  'pointer-events-none': { 'pointer-events': 'none' },
  'pointer-events-auto': { 'pointer-events': 'auto' },
  'select-none': { 'user-select': 'none' },
  'select-text': { 'user-select': 'text' },
  'select-all': { 'user-select': 'all' },
  'select-auto': { 'user-select': 'auto' },
  // Transitions
  'transition-none': { transition: 'none' },
  'transition': { transition: 'color 150ms cubic-bezier(0.4,0,0.2,1), background-color 150ms cubic-bezier(0.4,0,0.2,1), border-color 150ms cubic-bezier(0.4,0,0.2,1), opacity 150ms cubic-bezier(0.4,0,0.2,1), box-shadow 150ms cubic-bezier(0.4,0,0.2,1), transform 150ms cubic-bezier(0.4,0,0.2,1)' },
  'transition-all': { transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)' },
  'transition-colors': { transition: 'color 150ms cubic-bezier(0.4,0,0.2,1), background-color 150ms cubic-bezier(0.4,0,0.2,1), border-color 150ms cubic-bezier(0.4,0,0.2,1)' },
  'transition-opacity': { transition: 'opacity 150ms cubic-bezier(0.4,0,0.2,1)' },
  'transition-shadow': { transition: 'box-shadow 150ms cubic-bezier(0.4,0,0.2,1)' },
  'transition-transform': { transition: 'transform 150ms cubic-bezier(0.4,0,0.2,1)' },
  'duration-0': { 'transition-duration': '0ms' },
  'duration-75': { 'transition-duration': '75ms' },
  'duration-100': { 'transition-duration': '100ms' },
  'duration-150': { 'transition-duration': '150ms' },
  'duration-200': { 'transition-duration': '200ms' },
  'duration-300': { 'transition-duration': '300ms' },
  'duration-500': { 'transition-duration': '500ms' },
  'duration-700': { 'transition-duration': '700ms' },
  'duration-1000': { 'transition-duration': '1000ms' },
  'ease-linear': { 'transition-timing-function': 'linear' },
  'ease-in': { 'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)' },
  'ease-out': { 'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
  'ease-in-out': { 'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)' },
  // Object fit / position
  'object-contain': { 'object-fit': 'contain' },
  'object-cover': { 'object-fit': 'cover' },
  'object-fill': { 'object-fit': 'fill' },
  'object-none': { 'object-fit': 'none' },
  'object-scale-down': { 'object-fit': 'scale-down' },
  'object-top': { 'object-position': 'top' },
  'object-center': { 'object-position': 'center' },
  'object-bottom': { 'object-position': 'bottom' },
  // Aspect ratio
  'aspect-auto': { 'aspect-ratio': 'auto' },
  'aspect-square': { 'aspect-ratio': '1 / 1' },
  'aspect-video': { 'aspect-ratio': '16 / 9' },
  // Transform base
  'transform': { transform: 'translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))' },
  'transform-none': { transform: 'none' }
};

// ─── Dynamic class parsers ────────────────────────────────────────────────────
const classParsers = [
  // Margin / Padding (scale)
  { test: /^m([trblxy]?)-([\d.]+)$/, apply: (m, r) => applySpacing(m, r, 'margin') },
  { test: /^p([trblxy]?)-([\d.]+)$/, apply: (m, r) => applySpacing(m, r, 'padding') },
  // Margin / Padding (arbitrary)
  { test: /^m([trblxy]?)-\[(.+)\]$/, apply: (m, r) => applySpacingValue(m, r, 'margin') },
  { test: /^p([trblxy]?)-\[(.+)\]$/, apply: (m, r) => applySpacingValue(m, r, 'padding') },
  // Negative margin / padding
  { test: /^-m([trblxy]?)-([\d.]+)$/, apply: (m, r) => applySpacingNegative(m, r, 'margin') },
  { test: /^-p([trblxy]?)-([\d.]+)$/, apply: (m, r) => applySpacingNegative(m, r, 'padding') },
  // Position: top / right / bottom / left (scale + arbitrary)
  { test: /^(top|right|bottom|left)-([\d.]+)$/, apply: (m, r) => { r[m[1]] = spacingScale[m[2]] ?? (m[2] + 'px'); } },
  { test: /^(top|right|bottom|left)-\[(.+)\]$/, apply: (m, r) => { r[m[1]] = m[2]; } },
  // Inset (scale + arbitrary)
  { test: /^inset-([\d.]+)$/, apply: (m, r) => { r.inset = spacingScale[m[1]] ?? (m[1] + 'px'); } },
  { test: /^inset-x-([\d.]+)$/, apply: (m, r) => { const v = spacingScale[m[1]] ?? (m[1] + 'px'); r.left = v; r.right = v; } },
  { test: /^inset-y-([\d.]+)$/, apply: (m, r) => { const v = spacingScale[m[1]] ?? (m[1] + 'px'); r.top = v; r.bottom = v; } },
  { test: /^inset-\[(.+)\]$/, apply: (m, r) => { r.inset = m[1]; } },
  // Z-index (arbitrary)
  { test: /^z-(-?\d+)$/, apply: (m, r) => { r['z-index'] = m[1]; } },
  { test: /^z-\[(.+)\]$/, apply: (m, r) => { r['z-index'] = m[1]; } },
  // Gap
  { test: /^gap-([\d.]+)$/, apply: (m, r) => { r.gap = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^gap-x-([\d.]+)$/, apply: (m, r) => { r['column-gap'] = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^gap-y-([\d.]+)$/, apply: (m, r) => { r['row-gap'] = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^gap-\[(.+)\]$/, apply: (m, r) => { r.gap = m[1]; } },
  // Grid columns / rows
  { test: /^grid-cols-(\d+)$/, apply: (m, r) => { r['grid-template-columns'] = `repeat(${m[1]}, minmax(0, 1fr))`; } },
  { test: /^grid-rows-(\d+)$/, apply: (m, r) => { r['grid-template-rows'] = `repeat(${m[1]}, minmax(0, 1fr))`; } },
  { test: /^col-span-(\d+)$/, apply: (m, r) => { r['grid-column'] = `span ${m[1]} / span ${m[1]}`; } },
  { test: /^row-span-(\d+)$/, apply: (m, r) => { r['grid-row'] = `span ${m[1]} / span ${m[1]}`; } },
  { test: /^col-start-(\d+|auto)$/, apply: (m, r) => { r['grid-column-start'] = m[1]; } },
  { test: /^col-end-(\d+|auto)$/, apply: (m, r) => { r['grid-column-end'] = m[1]; } },
  // Flex basis
  { test: /^basis-([\d.]+)$/, apply: (m, r) => { r['flex-basis'] = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^basis-\[(.+)\]$/, apply: (m, r) => { r['flex-basis'] = m[1]; } },
  { test: /^basis-full$/, apply: (_, r) => { r['flex-basis'] = '100%'; } },
  // Opacity (arbitrary)
  { test: /^opacity-(\d+)$/, apply: (m, r) => { r.opacity = (parseInt(m[1], 10) / 100).toString(); } },
  // Sizing — width / height (scale then px fallback)
  { test: /^w-([\d.]+)$/, apply: (m, r) => { r.width = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^w-\[(.+)\]$/, apply: (m, r) => { r.width = m[1]; } },
  { test: /^h-([\d.]+)$/, apply: (m, r) => { r.height = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); } },
  { test: /^h-\[(.+)\]$/, apply: (m, r) => { r.height = m[1]; } },
  { test: /^size-([\d.]+)$/, apply: (m, r) => { const v = spacingScale[m[1]] ?? (parseInt(m[1], 10) + 'px'); r.width = v; r.height = v; } },
  { test: /^size-\[(.+)\]$/, apply: (m, r) => { r.width = m[1]; r.height = m[1]; } },
  { test: /^(min|max)-w-\[(.+)\]$/, apply: (m, r) => { r[`${m[1]}-width`] = m[2]; } },
  { test: /^(min|max)-h-\[(.+)\]$/, apply: (m, r) => { r[`${m[1]}-height`] = m[2]; } },
  // Fraction widths / heights
  { test: /^w-(1\/2|1\/3|2\/3|1\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|5\/6)$/, apply: (m, r) => { r.width = fracToPercent(m[1]); } },
  { test: /^h-(1\/2|1\/3|2\/3|1\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|5\/6)$/, apply: (m, r) => { r.height = fracToPercent(m[1]); } },
  // Border width (arbitrary)
  { test: /^border-(\d+)$/, apply: (m, r) => { r['border-width'] = m[1] + 'px'; } },
  // Border color (named)
  { test: /^border-([a-z]+)-(\d{2,3})$/, apply: (m, r) => { const c = resolveColor(m[1], m[2]); if (c) r['border-color'] = c; } },
  { test: /^border-([a-z]+)-(\d{2,3})\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(resolveColor(m[1], m[2]), parseInt(m[3], 10)); if (c) r['border-color'] = c; } },
  { test: /^border-(white|black|transparent|current|inherit)$/, apply: (m, r) => { const c = keywordColors[m[1]]; if (c) r['border-color'] = c; } },
  { test: /^border-\[(.+)\]$/, apply: (m, r) => { r['border-color'] = m[1]; } },
  { test: /^border-\[(.+)\]\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(m[1], parseInt(m[2], 10)); if (c) r['border-color'] = c; } },
  // Background color (named)
  { test: /^bg-([a-z]+)-(\d{2,3})$/, apply: (m, r) => { const c = resolveColor(m[1], m[2]); if (c) r['background-color'] = c; } },
  { test: /^bg-([a-z]+)-(\d{2,3})\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(resolveColor(m[1], m[2]), parseInt(m[3], 10)); if (c) r['background-color'] = c; } },
  { test: /^bg-(white|black|transparent|current|inherit)$/, apply: (m, r) => { const c = keywordColors[m[1]]; if (c) r['background-color'] = c; } },
  { test: /^bg-\[(.+)\]$/, apply: (m, r) => { r['background-color'] = m[1]; } },
  { test: /^bg-\[(.+)\]\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(m[1], parseInt(m[2], 10)); if (c) r['background-color'] = c; } },
  // Text color (named)
  { test: /^text-([a-z]+)-(\d{2,3})$/, apply: (m, r) => { const c = resolveColor(m[1], m[2]); if (c) r.color = c; } },
  { test: /^text-([a-z]+)-(\d{2,3})\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(resolveColor(m[1], m[2]), parseInt(m[3], 10)); if (c) r.color = c; } },
  { test: /^text-(white|black|transparent|current|inherit)$/, apply: (m, r) => { const c = keywordColors[m[1]]; if (c) r.color = c; } },
  { test: /^text-\[(.+)\]$/, apply: (m, r) => { r.color = m[1]; } },
  { test: /^text-\[(.+)\]\/(\d{1,3})$/, apply: (m, r) => { const c = withOpacity(m[1], parseInt(m[2], 10)); if (c) r.color = c; } },
  // Line height
  {
    test: /^leading-(none|tight|snug|normal|relaxed|loose)$/,
    apply: (m, r) => {
      const map = { none: '1', tight: '1.1', snug: '1.3', normal: '1.5', relaxed: '1.625', loose: '2' };
      r['line-height'] = map[m[1]];
    }
  },
  { test: /^leading-([\d.]+)$/, apply: (m, r) => { r['line-height'] = spacingScale[m[1]] ?? m[1]; } },
  // Letter spacing
  {
    test: /^tracking-(tighter|tight|normal|wide|wider|widest)$/,
    apply: (m, r) => {
      const map = { tighter: '-0.05em', tight: '-0.025em', normal: '0em', wide: '0.025em', wider: '0.05em', widest: '0.1em' };
      r['letter-spacing'] = map[m[1]];
    }
  },
  // Line clamp
  {
    test: /^line-clamp-(\d+)$/,
    apply: (m, r) => {
      r.overflow = 'hidden';
      r.display = '-webkit-box';
      r['-webkit-box-orient'] = 'vertical';
      r['-webkit-line-clamp'] = m[1];
    }
  },
  // Transform: rotate, scale, translate
  { test: /^rotate-(-?\d+)$/, apply: (m, r) => { r.transform = `rotate(${m[1]}deg)`; } },
  { test: /^-rotate-(\d+)$/, apply: (m, r) => { r.transform = `rotate(-${m[1]}deg)`; } },
  { test: /^scale-(\d+)$/, apply: (m, r) => { r.transform = `scale(${parseInt(m[1], 10) / 100})`; } },
  { test: /^scale-x-(\d+)$/, apply: (m, r) => { r.transform = `scaleX(${parseInt(m[1], 10) / 100})`; } },
  { test: /^scale-y-(\d+)$/, apply: (m, r) => { r.transform = `scaleY(${parseInt(m[1], 10) / 100})`; } },
  { test: /^translate-x-\[(.+)\]$/, apply: (m, r) => { r.transform = `translateX(${m[1]})`; } },
  { test: /^translate-y-\[(.+)\]$/, apply: (m, r) => { r.transform = `translateY(${m[1]})`; } },
  { test: /^translate-x-([\d.]+)$/, apply: (m, r) => { r.transform = `translateX(${spacingScale[m[1]] ?? (m[1] + 'px')})`; } },
  { test: /^translate-y-([\d.]+)$/, apply: (m, r) => { r.transform = `translateY(${spacingScale[m[1]] ?? (m[1] + 'px')})`; } },
  // Ring (arbitrary width)
  { test: /^ring-(\d+)$/, apply: (m, r) => { r['box-shadow'] = `0 0 0 ${m[1]}px rgb(59 130 246 / 0.5)`; } }
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fracToPercent(frac) {
  const [n, d] = frac.split('/').map(Number);
  return (n / d * 100).toFixed(4).replace(/\.?0+$/, '') + '%';
}

function resolveColor(name, shade) {
  if (!shade && keywordColors[name]) return keywordColors[name];
  const family = colorScale[name];
  return family && family[shade] ? family[shade] : (keywordColors[name] ?? null);
}

function hexToRgb(hex) {
  if (!hex || hex[0] !== '#') return null;
  const normalized = hex.replace('#', '').trim();
  const expand = (str) => str.split('').map((ch) => ch + ch).join('');
  let value = normalized;
  if (normalized.length === 3 || normalized.length === 4) {
    value = expand(normalized.slice(0, 3));
  }
  if (value.length !== 6 && value.length !== 8) return null;
  const intVal = parseInt(value.slice(0, 6), 16);
  const alpha = value.length === 8 ? parseInt(value.slice(6), 16) / 255 : 1;
  return { r: (intVal >> 16) & 255, g: (intVal >> 8) & 255, b: intVal & 255, a: alpha };
}

function withOpacity(baseColor, opacityPercent) {
  if (!baseColor) return null;
  const alpha = Math.max(0, Math.min(100, opacityPercent)) / 100;
  const rgb = hexToRgb(baseColor);
  if (rgb) {
    const finalAlpha = Math.round((rgb.a ?? 1) * alpha * 1000) / 1000;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${finalAlpha})`;
  }
  return `color-mix(in srgb, ${baseColor} ${opacityPercent}%, transparent)`;
}

function applySpacing(match, rules, property) {
  const axis = match[1];
  const value = spacingScale[match[2]] ?? null;
  if (!value) return;
  setSpacingAxis(rules, property, axis, value);
}

function applySpacingNegative(match, rules, property) {
  const axis = match[1];
  const value = spacingScale[match[2]] ?? null;
  if (!value || value === '0rem') return;
  setSpacingAxis(rules, property, axis, '-' + value);
}

function applySpacingValue(match, rules, property) {
  setSpacingAxis(rules, property, match[1], match[2]);
}

function setSpacingAxis(rules, property, axis, value) {
  if (axis === '') { rules[property] = value; }
  else if (axis === 'x') { rules[property + '-left'] = value; rules[property + '-right'] = value; }
  else if (axis === 'y') { rules[property + '-top'] = value; rules[property + '-bottom'] = value; }
  else if (axis === 't') { rules[property + '-top'] = value; }
  else if (axis === 'r') { rules[property + '-right'] = value; }
  else if (axis === 'b') { rules[property + '-bottom'] = value; }
  else if (axis === 'l') { rules[property + '-left'] = value; }
}

// Convert a single utility class (no prefix) to a CSS rules object, or null if unknown.
function convertClass(cls) {
  if (directMap[cls]) return { ...directMap[cls] };
  for (const parser of classParsers) {
    const m = cls.match(parser.test);
    if (m) {
      const rules = {};
      parser.apply(m, rules);
      return Object.keys(rules).length > 0 ? rules : null;
    }
  }
  return null;
}

// ─── Main conversion (with prefix support) ────────────────────────────────────
const BREAKPOINTS = {
  'sm': '(min-width: 640px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 1024px)',
  'xl': '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)'
};

const STATE_MAP = {
  'hover': ':hover', 'focus': ':focus', 'active': ':active',
  'disabled': ':disabled', 'visited': ':visited',
  'focus-within': ':focus-within', 'focus-visible': ':focus-visible',
  'checked': ':checked', 'placeholder': '::placeholder',
  'first': ':first-child', 'last': ':last-child',
  'odd': ':nth-child(odd)', 'even': ':nth-child(even)'
};

function convert(classes) {
  const base = {};
  const states = {};
  const media = {};
  const unknown = [];

  for (const token of classes.trim().split(/\s+/).filter(Boolean)) {
    const parts = token.split(':');
    const cls = parts[parts.length - 1];
    const prefixes = parts.slice(0, -1);

    const rules = convertClass(cls);
    if (!rules) { unknown.push(token); continue; }

    let bp = null;
    let state = null;

    for (const prefix of prefixes) {
      if (BREAKPOINTS[prefix]) bp = BREAKPOINTS[prefix];
      else if (prefix === 'dark') bp = '(prefers-color-scheme: dark)';
      else if (STATE_MAP[prefix]) state = STATE_MAP[prefix];
    }

    if (bp) {
      if (!media[bp]) media[bp] = { base: {}, states: {} };
      if (state) {
        if (!media[bp].states[state]) media[bp].states[state] = {};
        Object.assign(media[bp].states[state], rules);
      } else {
        Object.assign(media[bp].base, rules);
      }
    } else if (state) {
      if (!states[state]) states[state] = {};
      Object.assign(states[state], rules);
    } else {
      Object.assign(base, rules);
    }
  }

  return { base, states, media, unknown };
}

// ─── Output formatter ─────────────────────────────────────────────────────────
const BP_ORDER = Object.values(BREAKPOINTS).concat(['(prefers-color-scheme: dark)']);

function fmtRules(rules, indent = '') {
  return Object.entries(rules).map(([p, v]) => `${indent}${p}: ${v};`).join('\n');
}

function sanitiseSelector(raw) {
  const stripped = raw.replace(/["'<>{}; ]/g, '').trim();
  return stripped || '.element';
}

function formatOutput(groups, mode, selector, minify) {
  const { base, states, media } = groups;
  const parts = [];

  const sortedMedia = Object.entries(media).sort(([a], [b]) => {
    const ai = BP_ORDER.indexOf(a), bi = BP_ORDER.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  if (mode === 'flat') {
    const baseStr = fmtRules(base);
    if (baseStr) parts.push(baseStr);

    for (const [state, rules] of Object.entries(states)) {
      parts.push(`\n/* ${state} */\n` + fmtRules(rules));
    }

    for (const [query, group] of sortedMedia) {
      const mediaParts = [];
      const mBase = fmtRules(group.base, '  ');
      if (mBase) mediaParts.push(mBase);
      for (const [state, rules] of Object.entries(group.states)) {
        mediaParts.push(`  /* ${state} */\n` + fmtRules(rules, '  '));
      }
      if (mediaParts.length) {
        parts.push(`\n/* @media ${query} */\n` + mediaParts.join('\n\n'));
      }
    }

    return parts.join('\n');
  }

  // Scoped mode
  const sel = sanitiseSelector(selector);

  const baseStr = fmtRules(base, '  ');
  if (baseStr) parts.push(`${sel} {\n${baseStr}\n}`);

  for (const [state, rules] of Object.entries(states)) {
    parts.push(`${sel}${state} {\n${fmtRules(rules, '  ')}\n}`);
  }

  for (const [query, group] of sortedMedia) {
    const inner = [];
    const mBase = fmtRules(group.base, '    ');
    if (mBase) inner.push(`  ${sel} {\n${mBase}\n  }`);
    for (const [state, rules] of Object.entries(group.states)) {
      inner.push(`  ${sel}${state} {\n${fmtRules(rules, '    ')}\n  }`);
    }
    if (inner.length) {
      parts.push(`@media ${query} {\n${inner.join('\n\n')}\n}`);
    }
  }

  const result = parts.join('\n\n');

  if (!minify) return result;

  // Minify: collapse whitespace, strip spaces around CSS punctuation
  return result
    .replace(/\s*\{\s*/g, '{')
    .replace(/\s*\}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/\n/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
