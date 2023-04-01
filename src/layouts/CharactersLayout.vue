<template>
  <div>
    <h2 class="text-2xl font-bold">{{ headTitle }}</h2>
    <slot name="list"></slot>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    headTitle: {
      type: String,
      required: true
    }
  }
}
</script>
