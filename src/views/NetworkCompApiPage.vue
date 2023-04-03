<template lang="">
  <BaseLayout>
    <template #aside>
      <nav>
        <ul>
          <li
            :class="`${
              isActive(userId, id) ? 'bg-slate-400' : null
            }  cursor-pointer hover:bg-slate-400 transition-all p-3 rounded-md mb-2`"
            @click="setUserId(id)"
            v-for="{ id, username } in users"
            :key="`index-${id}`"
          >
            {{ username }}
          </li>
        </ul>
      </nav>
    </template>
    <template #section>
      <section class="flex flex-col overflow-y-scroll">
        <div v-if="isFirstSearch">Please Select a Person</div>
        <div v-else-if="isLoading && !isFirstSearch">...loading</div>
        <div v-else v-for="todo in todos" :key="`index-${todo.id}`">
          <pre>{{ todo }}</pre>
        </div>
      </section>
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import useState from '@/composables/useState'
import useEffect from '@/composables/useEffect'
const [userId, setUserId] = useState(0)
const [users, setUsers] = useState([])
const [todos, setTodos] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isFirstSearch, setIsFirstSearch] = useState(true)

useEffect(
  (newVal: number, oldVal: number) => {
    if (isFirstSearch.value) {
      setIsFirstSearch(false)
    }
    if (newVal !== oldVal) {
      getTodos(newVal)
    }
  },
  [userId]
)

const getUsers = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      users.map(({ id, username }: any) => {
        return { id, username }
      })
    )
}

const isActive = (linkVal: string, currentVal: string) => {
  return linkVal === currentVal
}
const getTodos = async (userId: number) => {
  setIsLoading(true)
  const todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((response) => response.json())
    .then((todos) =>
      todos.map(({ title, completed }: any) => {
        return { title, completed }
      })
    )
  setTodos(todos)
  setIsLoading(false)
}
setUsers(await getUsers())
</script>
