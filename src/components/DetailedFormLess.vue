<script lang="ts">
type show = {
  [k: string]: string | string[] | boolean
  title: string
  characters: string[]
  isPublished: boolean
  prefWatchTime: '' | 'afternoon' | 'night' | 'morning'
  notificationTimes: string[]
  isFavourite: boolean
}
type data = {
  shows: show[]
  formData: show
}

export default {
  data: () => {
    return {
      formData: {
        title: '',
        characters: [],
        isPublished: false,
        prefWatchTime: '',
        isFavourite: false,
        notificationTimes: []
      },
      shows: []
    } as data
  },
  methods: {
    makeFavourite(show: show) {
      show.isFavourite = true
    },
    handleSubmit() {
      this.shows = [...this.shows, { ...this.formData }]
      this.formData = {
        title: '',
        characters: [],
        isPublished: false,
        prefWatchTime: '',
        isFavourite: false,
        notificationTimes: ['ss']
      }
    },
    addCharacterField() {
      this.formData = {
        ...this.formData,
        characters: [...this.formData.characters, '']
      }
    },
    handleChange(e: Event, index?: number) {
      const { target } = e
      if (!target) {
        return
      }
      const { name, type, value, dataset, checked } = target as HTMLInputElement
      if (type === 'checkbox') {
        if (value === 'on') {
          this.formData = { ...this.formData, [name]: checked }
        } else {
          const checkedItems = this.formData[name] as string[]
          if (checked === true) {
            this.formData[name] = [...checkedItems, value]
          } else {
            this.formData[name] = [...checkedItems.filter((item: string) => item !== value)]
          }
        }
      } else if (type === 'text' && typeof index === 'number') {
        const charactersTmp = this.formData.characters
        charactersTmp[index] = value
        this.formData = { ...this.formData, [name]: charactersTmp }
      } else {
        this.formData = { ...this.formData, [name]: value }
      }
      console.log({ formData: this.formData, eventData: { name, checked, type, value, dataset } })
    }
  }
}
</script>

<template>
  <main class="main">
    <div class="show-container">
      <template v-if="shows.length !== 0">
        <div v-for="show in shows" :key="show.title">
          <div v-if="show.isPublished">
            <h2>{{ show.title }} {{ show.isFavourite ? '⭐' : '' }}</h2>
            <ul>
              <li v-for="character in show.characters" :key="character">
                <p>{{ character }}</p>
              </li>
            </ul>
            <button v-if="!show.isFavourite" @click="makeFavourite(show)">Favourite Me</button>
          </div>
          <p v-else>sorry {{ show.title }} is not published yet</p>
        </div>
      </template>
      <div v-else>Please Add Some Shows</div>
    </div>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="">show name</label>
        <input type="text" name="title" :value="formData.title" @input="handleChange" />
      </div>
      <div class="form-group">
        <label for="">characters</label>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <div v-for="(character, index) in formData.characters" :key="character">
            <label for="">character {{ index + 1 }}</label>
            <input
              @input="(event) => handleChange(event, index)"
              :value="character"
              name="characters"
              :key="index"
              :id="`${index}`"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="button" @click="addCharacterField">Add Character</button>
      </div>
      <div class="form-group">
        <label for="">published ?</label>
        <input
          type="checkbox"
          :checked="formData.isPublished"
          @input="handleChange"
          name="isPublished"
        />
      </div>
      <div class="form-group">
        <label for="">favourite ?</label>
        <input
          type="checkbox"
          :checked="formData.isFavourite"
          @input="handleChange"
          name="isFavourite"
        />
      </div>
      <div class="form-group">
        <label for="">watch time ?</label>
        <select @input="handleChange" :value="formData.prefWatchTime" name="prefWatchTime" id="">
          <option disabled value="">Please select one</option>
          <option value="afternoon" selected>afternoon</option>
          <option value="night">night</option>
          <option value="morning">morning</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">notification of episode release</label>
        <div class="form-group">
          <label for="">morning</label>
          <input
            type="checkbox"
            value="morning"
            :checked="formData.notificationTimes.includes('morning')"
            @input="handleChange"
            name="notificationTimes"
          />
        </div>
        <div class="form-group">
          <label for="">afternoon</label>
          <input
            type="checkbox"
            value="afternoon"
            :checked="formData.notificationTimes.includes('afternoon')"
            @input="handleChange"
            name="notificationTimes"
          />
        </div>
        <div class="form-group">
          <label for="">evening</label>
          <input
            type="checkbox"
            value="evening"
            :checked="formData.notificationTimes.includes('evening')"
            @input="handleChange"
            name="notificationTimes"
          />
        </div>
        <div class="form-group">
          <label for="">night</label>
          <input
            type="checkbox"
            value="night"
            :checked="formData.notificationTimes.includes('night')"
            @input="handleChange"
            name="notificationTimes"
          />
        </div>
      </div>
      <button type="submit">Add Show</button>
    </form>
  </main>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: slategray;
  padding: 1rem;
  border-radius: 10px;
  flex: 1;
}

.form-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.main {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}
.show-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: slategray;
  padding: 1rem;
  border-radius: 10px;
  flex: 1;
}
</style>
