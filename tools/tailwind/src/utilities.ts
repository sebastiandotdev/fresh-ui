import transition from './transitions.ts'
import scrollbarHide from './scrollbar-hide.ts'

const custom = {
  '.leading-inherit': {
    'line-height': 'inherit',
  },
  '.bg-img-inherit': {
    'background-image': 'inherit',
  },
  '.bg-clip-inherit': {
    'background-clip': 'inherit',
  },
  '.text-fill-inherit': {
    '-webkit-text-fill-color': 'inherit',
  },
  '.tap-highlight-transparent': {
    '-webkit-tap-highlight-color': 'transparent',
  },
}

export const utilities = {
  ...custom,
  ...transition,
  ...scrollbarHide,
}
