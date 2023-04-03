<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { routes } from './router'
import { computed } from 'vue'
const routeMeta = computed(() => routes.map(({ name, path }) => ({ path, name })))
</script>

<template>
  <div class="p-4">
    <header
      class="z-[999] left-0 flex gap-5 text-2xl fixed w-full bg-slate-400 top-0 text-red-500 p-2"
    >
      <RouterLink
        :to="path"
        v-for="{ name, path } in routeMeta"
        :class="`text-inherit cursor-pointer capitalize  hover:bg-transparent`"
        :key="name"
        >{{ name }}</RouterLink
      >
    </header>
    <Suspense>
      <RouterView />
      <template #fallback>
        <p>...loading</p>
      </template>
    </Suspense>
  </div>
</template>
