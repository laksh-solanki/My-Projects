<script>
export default {
  name: 'AboutCards',
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
  },
}
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-auto rounded-4" color="grey-lighten-4" max-width="400" v-bind="props">
        <v-img :aspect-ratio="16 / 9" :src="imageSrc" cover>
          <v-expand-transition>
            <div v-if="isHovering" class="d-flex bg-white v-card--reveal text-h2" style="height: 100%;">
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

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  color: black;
  position: absolute;
  width: 100%;
}
</style>
