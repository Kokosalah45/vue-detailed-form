<template>
  <button @click="$emit('makeFavorite', character)">favorite me ! ⭐</button>
</template>

<script lang="ts">
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  emits: ['makeFavorite']
}
</script>
