import { assertEquals } from '@std/assert'
import { useButton } from './use_button.ts'

Deno.test('useButton should return 1', () => {
  const result = useButton()
  assertEquals(result, 1)
})
