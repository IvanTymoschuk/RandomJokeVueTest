<template>
  <div>
    <h1>{{ jokeValue }}</h1>
    <button v-on:click="randomize">Random joke</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MainComponent extends Vue {
  get jokeValue () {
    return this.$store?.getters.getJoke?.data.value
  }

  randomize () {
    this.$store.dispatch('getJoke')
  }
}
</script>

<style scoped>
</style>
