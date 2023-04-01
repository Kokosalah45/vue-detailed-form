<script lang="ts">
export default {
  props: {
    favoriteCharacters: { type: Object, required: true }
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">My Favorite Characters</h2>
    <ul v-if="favoriteCharacters.isFavoriteCharacters">
      <li
        v-for="favoriteCharacter in favoriteCharacters.favoriteCharacters"
        :key="favoriteCharacter.name"
      >
        {{ favoriteCharacter.name }}
      </li>
    </ul>
    <p v-else class="text-xs">please Add Some Characters</p>
  </div>
</template>
