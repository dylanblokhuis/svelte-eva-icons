const path = require('path')
const eva = require('eva-icons/eva-icons.json')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const handleComponentName = name => name.replace(/\-(\d+)/, '$1')

const icons = Object.keys(eva).map(name => ({
  name,
  pascalCasedComponentName: pascalCase(`${handleComponentName(name)}-icon`),
  kebabCasedComponentName: `${handleComponentName(name)}-icon`
}))

Promise.all(icons.map(icon => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">${eva[icon.name]}</svg>`
  const component = `${svg}`
  const filepath = `./src/icons/${icon.pascalCasedComponentName}.svelte`
  return fs.ensureDir(path.dirname(filepath))
    .then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(() => {
  const main = icons
    .map(icon => `export { default as ${icon.pascalCasedComponentName} } from './icons/${icon.pascalCasedComponentName}.svelte'`)
    .join('\n\n')
  return fs.outputFile('./src/index.js', main, 'utf8')
})