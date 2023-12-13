import { describe, expect, it } from 'vitest'
import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { vDebounce } from '../directives'

const tc = defineComponent({
  setup() {
    const num = ref(0)
    function add() {
      num.value++
    }
    return {
      num,
      add  
    }
  },
  template: '<button v-debounce="add">num: {{num}}</button>'
})

describe('custom directives', async () => {
  it('debounce submit', async () => {
    const wrapper = mount(tc, {
      global: {
        directives: {
          debounce: vDebounce
        }
      }
    })

    const interval = setInterval(async () => {
      await wrapper.find('button').trigger('click')
    }, 200)
    await new Promise(resolve => setTimeout(resolve, 1000))

    clearInterval(interval)

    await new Promise(resolve => setTimeout(resolve, 700))
    await nextTick()
    const btn = wrapper.get('button')
    expect(btn.text()).toBe('num: 1')
  })
})