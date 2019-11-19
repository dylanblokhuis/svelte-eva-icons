# svelte-eva-icons

## Install

```bash
yarn add --dev svelte-eva-icons
```
or use NPM
```bash
npm install --save-dev svelte-eva-icons
```

## Usage
Unused icons will get removed with tree shaking in bundlers like webpack and rollup.
```html
    <script>
        // Only import what you need!
        // Add Outline for an outline icon
    	import { AlertCircleIcon, AlertCircleOutlineIcon, ... } from 'svelte-eva-icons'
    </script>
    
    <!-- Regular Icon -->
    <AlertCircleIcon />

    <!-- Outline Icon -->
    <AlertCircleOutlineIcon />
```
All icons you find on the creator's site are in kebab-case, when importing use {PascalCase}Icon.
See all icons here: https://akveo.github.io/eva-icons/

