<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="mb-4 p-8">
      <div class="p-2">
        <h2 class="text-2xl font-bold">Very Detailed Form</h2>
        <p>
          Represents roughly how form and event handling works and how two way data binding works
        </p>
      </div>
      <DetailedForm />
    </div>
    <div class="mb-4 p-8">
      <div class="p-2">
        <h2 class="text-2xl font-bold">Less Detailed Form</h2>
        <p>
          Represents roughly how form and event handling works and how two way data binding works
          just like how v-model <span class="font-bold text-red-500">works under the hood</span>
        </p>
      </div>
      <DetailedFormLess />
    </div>
    <div class="mb-4 p-8">
      <div class="p-2">
        <h2 class="text-2xl font-bold capitalize">demonstration of computed properties</h2>
        <p class="capitalize">shows a computed property with implementation of v-model</p>
      </div>
      <CharactersComponent />
    </div>
  </div>
</template>
<script lang="ts">
import DetailedForm from '@/components/DetailedForm.vue'
import DetailedFormLess from '@/components/DetailedFormLess.vue'
import CharactersComponent from '@/components/CharactersComponent.vue'
export default {
  components: {
    DetailedForm,
    DetailedFormLess,
    CharactersComponent
  }
}
</script>
