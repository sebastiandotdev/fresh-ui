import { type Config } from 'tailwindcss'
import { freshui } from '@fresh-ui/tailwind'

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx}',
  ],
  plugins: [freshui()],
} satisfies Config
