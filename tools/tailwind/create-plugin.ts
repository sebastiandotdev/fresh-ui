import plugin from 'tailwindcss/plugin.js'

export function pluginCreator() {
  return plugin(({ addBase }) => {
    addBase({
      '*': {
        'background-color': '#202020',
      },
    })
  })
}
