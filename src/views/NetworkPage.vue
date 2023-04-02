<template lang="">
  <BaseLayout>
    <template #aside>
      <nav>
        <ul>
          <li
            :class="`${
              isActive(userId, id) ? 'bg-slate-400' : null
            }  cursor-pointer hover:bg-slate-400 transition-all p-3 rounded-md mb-2`"
            @click="setUser(id)"
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
<script lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
export default {
  data: (): any => ({
    userId: 0,
    users: [],
    todos: [],
    isLoading: false,
    isFirstSearch: true
  }),
  components: {
    BaseLayout
  },
  methods: {
    setUser(id: string) {
      this.userId = id
    },
    async getUsers() {
      this.users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) =>
          users.map(({ id, username }: any) => {
            return { id, username }
          })
        )
    },
    isActive(linkVal: string, currentVal: string) {
      return linkVal === currentVal
    },
    async getTodos(userId: string) {
      this.isLoading = true
      this.todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((response) => response.json())
        .then((todos) =>
          todos.map(({ title, completed }: any) => {
            return { title, completed }
          })
        )
      this.isLoading = false
    }
  },
  computed: {},
  watch: {
    userId(newVal, oldVal) {
      if (this.isFirstSearch) {
        this.isFirstSearch = false
      }
      if (newVal !== oldVal) {
        this.getTodos(newVal)
      }
    }
  },
  async created() {
    this.getUsers()
  }
}
</script>
