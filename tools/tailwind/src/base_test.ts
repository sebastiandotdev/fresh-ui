import { assertEquals } from '@std/assert'
import { get } from '@fresh-ui/utils'
import { defaultLayout } from './base.ts'

Deno.test('Should return dividerWeight', () => {
  const dividerWeight = get(defaultLayout, 'dividerWeight')
  assertEquals(dividerWeight, '1px')
})
