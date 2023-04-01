<template>
  <ul v-if="!isEmpty">
    <li v-for="(element, index) in list" :key="`element-${index}`">
      <template v-if="isElementObject">
        <p v-for="(v, k) in element" :key="k">{{ k }}:{{ v }}</p>
      </template>
      <template v-else>
        <p>{{ element }}</p>
      </template>
      <slot :element="element" name="list-items" />
    </li>
  </ul>
  <p v-else class="text-xs">{{ emptyListPrompt }}</p>
</template>
<script lang="ts">
export default {
  props: {
    emptyListPrompt: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    isEmpty() {
      return this.list.length === 0
    },
    isElementObject() {
      return typeof this.list[0] === 'object'
    }
  }
}
</script>
