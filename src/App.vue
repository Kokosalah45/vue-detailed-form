<script lang="ts">
import HomePage from '@/views/HomePage.vue'
import NetworkPage from '@/views/NetworkPage.vue'
import NetworkCompApiPage from './views/NetworkCompApiPage.vue'
export default {
  name: 'App',
  components: {
    HomePage,
    NetworkPage,
    NetworkCompApiPage
  },
  data: () => ({
    mainDir: 'Home',
    dirs: ['Home', 'Network', 'NetworkCompApi']
  }),
  computed: {
    renderPage() {
      return this.mainDir + 'Page'
    }
  },
  methods: {
    changeDir(dir: string) {
      this.mainDir = dir
    }
  }
}
</script>

<template>
  <div class="p-4">
    <header
      class="z-[999] left-0 flex gap-5 text-2xl fixed w-full bg-slate-400 top-0 text-red-500 p-2"
    >
      <a
        v-for="dir in dirs"
        :class="`text-inherit cursor-pointer ${
          dir === mainDir ? 'text-black' : null
        } hover:bg-transparent`"
        @click="changeDir(dir)"
        :key="dir"
        >{{ dir }}</a
      >
    </header>
    <Suspense>
      <component :is="renderPage" />
      <template #fallback> ...loading </template>
    </Suspense>
  </div>
</template>
