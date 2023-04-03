import useEffect from '@/composables/useEffect'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default function useIsActive() {
  const route = useRoute()
  const currentPath = ref(route.fullPath)
  useEffect(() => {
    console.log(route.path, route.fullPath)
    currentPath.value = route.fullPath
  }, [route])

  return (assignedPath: string) => currentPath.value === assignedPath
}
