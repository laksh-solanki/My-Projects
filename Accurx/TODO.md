# TODO: Synchronize Loading States

- [x] Modify Tile.vue: Add emit('loading-state', loading.value) in onNameSelected
- [x] Modify Tile.vue: Pass :loading="loading" as prop to TileNavbar in template
- [x] Modify TileNavbar.vue: Add props: { loading: Boolean }
- [x] Modify TileNavbar.vue: Pass :loading to SearchBar in template
- [x] Modify SearchBar.vue: Add props: { loading: Boolean }
- [x] Modify SearchBar.vue: Remove data loading and onClick method
- [x] Modify SearchBar.vue: Bind :loading to v-text-field
