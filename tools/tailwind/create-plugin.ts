import plugin from '@tailwindcss/plugin'

export function pluginCreator() {
  return plugin(({ addBase }) => {
    addBase({
      '*': {
        boxSizing: 'border-box',
      },
    })
  })
}
