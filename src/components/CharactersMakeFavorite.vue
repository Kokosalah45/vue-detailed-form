<!-- <template>
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
</script> -->

<template>
  <button @click="makeFavorite">favorite me ! ⭐</button>
</template>

<script setup lang="ts">
const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['makeFavorite'])

const makeFavorite = () => {
  emits('makeFavorite', props.character)
}
</script>
