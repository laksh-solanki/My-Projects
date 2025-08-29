<script>
export default {
  name: 'SearchBar',
  data: () => ({
    loaded: false,
    loading: false,
  }),
  methods: {
    onClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
}
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact" label="Search..."
        variant="solo-filled" type="search" hide-details single-line @click:append-inner="onClick"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
