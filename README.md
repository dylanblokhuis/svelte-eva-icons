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
    	import { ActivityIcon, ArrowCircleDownIcon, ... } from 'svelte-eva-icons'
    </script>
    
    <!-- When using custom elements -->
    <activity-icon />
    
    <!-- When using regular svelte compontent -->
    <ActivityIcon />
```
All icons you find on the creator's site are in kebab-case, when importing use {PascalCase}Icon.
See all icons here: https://akveo.github.io/eva-icons/

