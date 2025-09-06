<script>
export default {
  name: 'TileCards',
  props: {
    imageSrc: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', // Default image if none provided
    },
    price: {
      type: String,
      default: '$0.00', // Default price if none provided
    },
    title: {
      type: String,
      default: 'Default Title',
    },
    description: {
      type: String,
      default: 'Default description text.',
    },
    stock: {
      type: String,
      default: 'In Stock', // Default stock status
    },
    selectedName: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <div>
    <v-skeleton-loader v-if="lowNetwork" class="mx-auto rounded-4" elevation="2" max-width="360"
      type="card, article" boilerplate />
    <v-hover v-else v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto rounded-4"
        color="grey-lighten-4"
        min-height="400"
        v-bind="props"
        :class="{ 'selected-card': title === selectedName }"
      >
        <v-img :aspect-ratio="16 / 9" :src="imageSrc" cover>
          <v-expand-transition>
            <div v-if="isHovering" class="d-flex bg-white v-card--reveal text-h2" style="height: 100%">
              {{ price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <div class="text-h4 font-weight-light text-blue mb-2">
            {{ title }}
          </div>

          <h3 class="font-weight-light text-grey text-h6 mb-2">
            {{ description }}
          </h3>

          <div class="font-weight-light text-h6 mb-2">
            {{ stock }}
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  color: black;
  position: absolute;
  width: 100%;
}

.selected-card {
  border: 2px solid #1976d2;
  box-shadow: 0 0 10px #1976d2;
}
</style>
