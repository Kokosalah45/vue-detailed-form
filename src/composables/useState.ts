import { ref } from 'vue'

export default function useState(initValue: any) {
  const state = ref(initValue)
  const setter = (value: any) => {
    state.value = value
  }
  return [state, setter]
}
