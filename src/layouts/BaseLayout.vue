<template>
  <main class="grid grid-cols-base-layout h-screen p-12 overflow-y-auto gap-6">
    <slot class="col-start-1 col-end-2" name="aside"></slot>
    <slot class="col-start-2 col-end-3" name="section"></slot>
  </main>
</template>
