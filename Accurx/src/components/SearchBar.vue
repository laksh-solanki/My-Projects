<script>
export default {
  name: 'SearchBar',
  props: {
    loading: Boolean,
  },
  data: () => ({
    loaded: false,
    searchText: '',
    isFocused: false,
  }),
  methods: {
    onInput() {
      this.$emit('search-input', this.searchText)
    },
    onFocus() {
      this.isFocused = true
    },
    onBlur() {
      this.isFocused = false
    },
  },
}
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <v-text-field v-model="searchText" :loading="loading" append-inner-icon="mdi-magnify" density="compact" label="Search Tiles ..."
        variant="solo-filled" type="search" hide-details single-line :class="{ focused: isFocused }" @input="onInput" @focus="onFocus" @blur="onBlur"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-text-field :deep(.v-label) {
  transition: all 0.3s ease;
}

.v-text-field.focused :deep(.v-label) {
  transform: translateY(-10px) scale(0.8);
  color: #1976d2;
}
</style>
