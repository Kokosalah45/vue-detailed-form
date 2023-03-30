<script lang="ts">
import DetailedForm from './components/DetailedForm.vue'
import DetailedFormLess from './components/DetailedFormLess.vue'
import './style.css'
export default {
  name: 'App',
  components: {
    DetailedForm,
    DetailedFormLess
  }
}
</script>

<template>
  <div class="container">
    <div class="mb-4">
      <div class="p-2">
        <h2 class="text-2xl font-bold">Very Detailed Form</h2>
        <p>
          Represents roughly how form and event handling works and how two way data binding works
        </p>
      </div>
      <DetailedForm />
    </div>
    <div class="mb-4">
      <div class="p-2">
        <h2 class="text-2xl font-bold">Less Detailed Form</h2>
        <p>
          Represents roughly how form and event handling works and how two way data binding works
          just like how v-model <span class="font-bold text-red-500">works under the hood</span>
        </p>
      </div>
      <DetailedFormLess />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
