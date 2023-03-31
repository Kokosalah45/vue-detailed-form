<template>
  <section class="flex gap-2">
    <div>
      <h2 class="text-2xl font-bold">My Characters</h2>
      <ul v-if="isCharacters">
        <li v-for="character in characters" :key="character.name">
          <p>{{ character.name }}</p>
          <p>{{ character.faction }}</p>
          <button @click="makeFavorite(character)">favorite me ! ⭐</button>
        </li>
      </ul>
      <p v-else class="text-xs">please Add Some Characters</p>
    </div>
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
    <div>
      <input
        @keyup.enter="addCharacter"
        class="text-blue-500 p-1 m-1 inline-block"
        v-model="character.name"
        type="text"
      />
      <select class="p-1 m-1 inline-block bg-slate-400" v-model="character.faction">
        <option
          :class="`${factionUI[faction].classes}`"
          v-for="faction in factions"
          :value="faction"
          :key="faction"
        >
          {{ faction }} {{ factionUI[faction].image }}
        </option>
      </select>
    </div>
    <ul>
      <li
        :class="`grid grid-cols-3 gap-2 ${factionUI[factionName].classes}`"
        v-for="{ factionCount, factionName, factionPercentage } in factionsStats"
        :key="factionName"
      >
        <div>{{ factionName }} {{ factionUI[factionName].image }}</div>
        <div>{{ factionCount }}</div>
        <div>{{ factionPercentage }}%</div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import type { TupleToUnion } from '../types'
type FactionsType = ['air', 'water', 'fire', 'earth']
type FactionType = TupleToUnion<FactionsType>
type character = {
  name: string
  faction?: FactionType
  isFavorite: boolean
}

type TemplateData = {
  characters: character[]
  character: character
  factions: FactionsType
  factionUI: Record<
    FactionType,
    {
      image: string
      classes: string
    }
  >
}
export default {
  data: (): TemplateData => ({
    characters: [],
    character: {
      name: '',
      isFavorite: false,
      faction: 'air'
    },
    factions: ['air', 'water', 'fire', 'earth'],
    factionUI: {
      air: {
        image: '💨',
        classes: ''
      },
      earth: {
        image: '⛰️',
        classes: 'text-green-300'
      },
      fire: {
        image: '🔥',
        classes: 'text-red-300'
      },
      water: {
        image: '💧',
        classes: 'text-blue-300'
      }
    }
  }),

  methods: {
    addCharacter() {
      if (this.character.faction) {
        this.characters.push(this.character)
      }
      this.character = {
        name: '',
        isFavorite: false,
        faction: 'air'
      }
    },
    makeFavorite(character: character) {
      character.isFavorite = true
    }
  },
  computed: {
    charactersLength() {
      return this.characters.length
    },

    isCharacters() {
      return this.charactersLength > 0
    },
    favoriteCharacters() {
      const favoriteCharacters = this.characters.filter(({ isFavorite }) => isFavorite)
      const isFavoriteCharacters = favoriteCharacters.length > 0
      return {
        favoriteCharacters,
        isFavoriteCharacters
      }
    },
    factionsStats() {
      const factionsStats = this.factions.map((factionName) => {
        const members = this.characters.filter((character) => character.faction === factionName)

        const factionCount = members.length
        const factionPercentage = (factionCount / this.charactersLength) * 100
        return {
          factionName,
          members,
          factionCount,
          factionPercentage: isNaN(factionPercentage) ? 0 : factionPercentage.toFixed(2)
        }
      })
      return factionsStats
    }
  }
}
</script>
