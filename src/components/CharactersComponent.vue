<template>
  <section class="flex gap-2">
    <CharactersLayout head-title="My Characters">
      <template #list>
        <ListComponent empty-list-prompt="Please Add Some Characters" :list="characters">
          <template #list-items="{ element }">
            <CharactersMakeFavorite :character="element" @makeFavorite="makeFavorite" />
          </template>
        </ListComponent>
      </template>
    </CharactersLayout>
    <CharactersLayout head-title="My Favorite Characters">
      <template #list>
        <ListComponent empty-list-prompt="Please Add Some Characters" :list="favoriteCharacters" />
      </template>
    </CharactersLayout>
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
import CharactersMakeFavorite from './CharactersMakeFavorite.vue'
import CharactersLayout from '@/layouts/CharactersLayout.vue'
import ListComponent from './ListComponent.vue'
import type { FactionType, FactionsType, character } from '../types'

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
  components: {
    CharactersMakeFavorite,
    CharactersLayout,
    ListComponent
  },
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
    favoriteCharacters() {
      const favoriteCharacters = this.characters.filter(({ isFavorite }) => isFavorite)
      return favoriteCharacters
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
