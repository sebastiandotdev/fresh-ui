import { assertEquals } from '@std/assert'
import { emptyTarget } from './deepmerge.ts'

Deno.test('emptyTarget returns an empty object for objects', () => {
  const obj = {}
  assertEquals(emptyTarget(obj), {})
})
