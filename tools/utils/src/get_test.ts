import { get } from './get.ts'
import { assertEquals } from '@std/assert'

Deno.test('Shold get value from object', () => {
  const obj = {
    a: {
      b: {
        c: 'd',
      },
    },
  }
  assertEquals(get(obj, 'a.b.c'), 'd')
})

Deno.test('Should get undefined from object', () => {
  const obj = {
    a: {
      b: {
        c: 'd',
      },
    },
  }
  assertEquals(get(obj, 'a.b.c.d'), undefined)
})

Deno.test('Should get undefined from undefined', () => {
  assertEquals(get(undefined, 'a.b.c.d'), undefined)
})

Deno.test('Should get undefined from null', () => {
  assertEquals(get(null, 'a.b.c.d'), undefined)
})
