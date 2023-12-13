import create from '../create'
import { describe, expect, it } from 'vitest'
import { readFileSync } from 'fs'

describe('bin scaffold module', () => {

  describe('create table error args', () => {
    it('error temp type', () => {
      try {
        create({
          type: 'dialog',
          path: '/Users/ray-d-song/temp/SourceCode/vitest-tutorial-sourcecode/src/bin/__test__/dialog.vue'
        })
      } catch(e) {
        expect(e).toBe('当前仅支持生成 table 类型')
        const product = readFileSync('/Users/ray-d-song/temp/SourceCode/vitest-tutorial-sourcecode/src/bin/__test__/dialog.vue', 'utf-8')
        expect(product).toBeUndefined
      }
    })
  })

  it('create table', () => {
    create({
      type: 'table',
      path: '/Users/ray-d-song/temp/SourceCode/vitest-tutorial-sourcecode/src/bin/__test__/table.vue'
    })
    const temp = readFileSync('/Users/ray-d-song/temp/SourceCode/vitest-tutorial-sourcecode/src/bin/dist/table', 'utf-8')
    const product = readFileSync('/Users/ray-d-song/temp/SourceCode/vitest-tutorial-sourcecode/src/bin/__test__/table.vue', 'utf-8')
    expect(temp).toBe(product)
  })

})