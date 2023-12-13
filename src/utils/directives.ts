import _ from 'lodash'

const vDebounce = {
  beforeMount(el: HTMLElement, binding: {value: (...args: any) => any}) {
    el.addEventListener('click', _.debounce(binding.value, 600))
  }
}

export {
  vDebounce
}