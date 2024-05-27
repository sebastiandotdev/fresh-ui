import { assertEquals } from '@std/assert'
import { isMergeableObject } from './is_mergeable_object.ts'

Deno.test('isMergeableObject returns true for objects', () => {
  const obj = {}
  assertEquals(isMergeableObject(obj), true)
})

Deno.test('isMergeableObject returns true for arrays', () => {
  const arr = [1, 2]
  assertEquals(isMergeableObject(arr), true)
})

Deno.test('isMergeableObject returns false for special objects', () => {
  const date = new Date()
  assertEquals(isMergeableObject(date), false)
})

Deno.test('isMergeableObject returns false for special objects', () => {
  const reg = new RegExp('')
  assertEquals(isMergeableObject(reg), false)
})
