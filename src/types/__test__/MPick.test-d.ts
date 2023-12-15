import { expectTypeOf, test } from 'vitest'
import type { MPick } from '../MPick'


test('test mock Pick', () => {
  interface Foo {
    a: string
    b: number
  }
  type Bar = MPick<Foo, 'a'>
  interface Exp {
    a: string
  }
  expectTypeOf<Bar>().toEqualTypeOf<Exp>()
})