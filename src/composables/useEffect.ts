import { watch } from 'vue'

export default function useEffect(cb: any, deps: any) {
  watch(deps, cb)
}
