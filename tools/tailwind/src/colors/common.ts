import { blue } from './blue.ts'
import { green } from './green.ts'
import { pink } from './pink.ts'
import { purple } from './purple.ts'
import { red } from './red.ts'
import { yellow } from './yellow.ts'
import { cyan } from './cyan.ts'
import { zinc } from './zinc.ts'

export const commonColors = {
  white: '#ffffff',
  black: '#000000',
  blue,
  green,
  pink,
  purple,
  red,
  yellow,
  cyan,
  zinc,
}

export type CommonColors = typeof commonColors
