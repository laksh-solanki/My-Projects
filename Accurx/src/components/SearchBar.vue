<script>
export default {
  name: 'SearchBar',
  data: () => ({
    loaded: false,
    loading: false,
    searchText: '',
  }),
  methods: {
    onClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    onInput() {
      this.$emit('search-input', this.searchText)
    },
  },
}
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <v-text-field v-model="searchText" :loading="loading" append-inner-icon="mdi-magnify" density="compact" label="Search Tiles ..."
        variant="solo-filled" type="search" hide-details single-line @input="onInput" @click:control="onClick"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
