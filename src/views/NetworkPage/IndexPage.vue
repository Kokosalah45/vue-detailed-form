<template>
  <BaseLayout>
    <template #aside>
      <nav>
        <ul class="flex flex-col gap-6">
          <li v-for="{ name, path } in routeMeta" :key="name">
            <RouterLink
              :class="`${
                route.path === path ? 'bg-slate-400' : ''
              }  cursor-pointer hover:bg-slate-400 transition-all p-3 rounded-md mb-2`"
              :to="path"
              >{{ name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </template>
    <template #section>
      <RouterView />
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import { computed } from 'vue'
import { RouterView, RouterLink, useRoute, useLink } from 'vue-router'
import { routes } from '@/router'
const rootPath = '/network'

const route = useRoute()

const routeMeta = computed(() =>
  routes
    .find(({ path }) => path === rootPath)
    ?.children?.map(({ name, path }) => ({ path: rootPath + '/' + path, name }))
)
</script>
