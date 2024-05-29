import { flatten } from 'flat'

/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
export const isBaseTheme = (theme: string) =>
  theme === 'light' || theme === 'dark'

export function swapColorValues<T extends object>(colors: T) {
  const swappedColors = {}
  const keys = Object.keys(colors)
  const length = keys.length

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i]
    const key2 = keys[length - 1 - i]

    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    swappedColors[key1] = colors[key2]

    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    swappedColors[key2] = colors[key1]
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)]

    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    swappedColors[middleKey] = colors[middleKey]
  }

  return swappedColors
}

export function removeDefaultKeys<T extends object>(obj: T) {
  const newObj = {}

  for (const key in obj) {
    if (key.endsWith('-DEFAULT')) {
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      newObj[key.replace('-DEFAULT', '')] = obj[key]
      continue
    }
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    newObj[key] = obj[key]
  }

  return newObj
}

export const flattenThemeObject = (obj: Record<string, unknown>) => {
  const flat = flatten(obj, { delimiter: '-' })
  const removedKeys = removeDefaultKeys(flat)

  return removedKeys
}
