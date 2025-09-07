<template>
  <div class="services-page-v2">
    <header class="text-center py-16">
      <div class="container mx-auto">
        <h1 class="text-h2 font-weight-light">Our Services</h1>
        <p class="text-h6 text-grey-darken-1 mt-4">A new approach to your business needs.</p>
      </div>
    </header>

    <main class="container mx-auto pb-12">
      <v-row>
        <v-col v-for="service in services" :key="service.id" cols="12" md="4">
          <v-card class="service-card-v2 text-center pa-8" flat outlined>
            <v-icon size="56" class="mb-6" color="teal">{{ service.icon }}</v-icon>
            <h5 class="text-h5 font-weight-medium">{{ service.title }}</h5>
            <p class="card-text mt-3 text-grey-darken-2">{{ service.description }}</p>
          </v-card>
        </v-col>
      </v-row>

      <section class="why-choose-us-v2 text-center mt-8">
        <h2 class="text-h3 font-weight-light">Why Partner With Us?</h2>
        <v-row class="mt-10">
          <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
            <div class="feature-item pa-4">
              <v-icon size="48" class="mb-4" color="amber">{{ feature.icon }}</v-icon>
              <h3 class="text-h6 font-weight-medium">{{ feature.title }}</h3>
              <p class="mt-2 text-blue-grey-lighten-4">{{ feature.text }}</p>
            </div>
          </v-col>
        </v-row>
      </section>

      <div class="text-center">
        <v-btn @click="dialog = true" class="con-btn">Contact Us</v-btn>
      </div>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card class="rounded-bottom-2">
          <button type="button" class="btn btn-close btn-light bg-light mb-0 mt-4 ms-5"
            @click="dialog = false"></button>
          <contactService />
        </v-card>
      </v-dialog>
    </main>
  </div>
</template>

<script>
import contactService from '@/components/contactservice.vue'

export default {
  name: 'ServicesPage',
  components: {
    contactService,
  },
  data: () => ({
    dialog: false,
    services: [
      {
        id: 1,
        title: 'Web Development',
        description: 'Crafting beautiful and functional websites for the modern web.',
        icon: 'mdi-web',
      },
      {
        id: 2,
        title: 'Mobile App Development',
        description: 'Building intuitive and powerful mobile experiences for all devices.',
        icon: 'mdi-cellphone',
      },
      {
        id: 3,
        title: 'UI/UX Design',
        description: 'Designing user-centric interfaces that are both beautiful and easy to use.',
        icon: 'mdi-palette-swatch-outline',
      },
    ],
    features: [
      {
        icon: 'mdi-creation',
        title: 'Creative Solutions',
        text: 'We think outside the box to find the best solutions for your unique needs.',
      },
      {
        icon: 'mdi-rocket-launch',
        title: 'Fast Delivery',
        text: 'We work efficiently to deliver high-quality results on time, every time.',
      },
      {
        icon: 'mdi-head-heart-outline',
        title: 'Dedicated Support',
        text: 'Our team is always here to help you with any questions or concerns.',
      },
    ],
  }),
}
</script>

<style scoped>
.services-page-v2 {
  background-color: #000000;
}

.service-card-v2 {
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.3s ease-in-out;
}

.service-card-v2:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.why-choose-us-v2 {
  background-color: #474747;
  border-radius: 16px;
  padding: 3rem;
}

.feature-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.feature-item:hover {
  transform: translateY(-8px);
}

.con-btn {
  font-size: 1.5rem;
  color: #fafafa;
  text-transform: uppercase;
  border-radius: 10px;
  border: 2px solid #fafafa;
  background: #252525;
  box-shadow: 3px 3px #fafafa;
  cursor: pointer;
  margin: 35px 0;
  height: 50px;
}

.con-btn:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
</style>
