import { watch, ref, type WatchSource } from 'vue'
import moment from 'moment/moment'

export function useLastChange(source: WatchSource) {
  const lastChange = ref('')

  watch(source, () => {
    lastChange.value = moment().format('YYYY-MM-DD HH:mm:ss')
  })

  return lastChange
}