import { assertEquals } from 'jsr:@std/assert'
import { useAlert } from './use_alert.ts'

Deno.test('Should return true', () => {
  const isTrue = useAlert()
  assertEquals(isTrue, true)
})
