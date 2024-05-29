import { commonColors } from './common.ts'
import { semanticColors } from './semantics.ts'

const colors = {
  ...commonColors,
  ...semanticColors,
}

console.log(colors)

export * from './colors.d.ts'
export { colors, commonColors, semanticColors }
