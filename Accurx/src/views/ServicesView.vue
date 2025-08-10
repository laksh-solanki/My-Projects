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
        <v-col
          v-for="service in services"
          :key="service.id"
          cols="12"
          md="4"
        >
          <v-card class="service-card-v2 text-center pa-8" flat outlined>
            <v-icon size="56" class="mb-6" color="teal">{{ service.icon }}</v-icon>
            <h5 class="text-h5 font-weight-medium">{{ service.title }}</h5>
            <p class="card-text mt-3 text-grey-darken-2">{{ service.description }}</p>
          </v-card>
        </v-col>
      </v-row>

      <section class="why-choose-us-v2 text-center pa-16 mt-8">
        <h2 class="text-h3 font-weight-light">Why Partner With Us?</h2>
        <v-row class="mt-10">
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            md="4"
          >
            <div class="feature-item pa-4">
              <v-icon size="48" class="mb-4" color="amber">{{ feature.icon }}</v-icon>
              <h3 class="text-h6 font-weight-medium">{{ feature.title }}</h3>
              <p class="mt-2 text-grey-darken-2">{{ feature.text }}</p>
            </div>
          </v-col>
        </v-row>
      </section>

      <div class="text-center mt-10">
        <v-btn large color="teal" dark @click="dialog = true" class="text-h6">Contact Us</v-btn>
      </div>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="text-h5 text-center py-4">Let's Talk</v-card-title>
          <v-card-text class="px-8 pb-8">
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Your Name"
                variant="outlined"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Your Email"
                variant="outlined"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                label="How can we help?"
                variant="outlined"
                required
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center pb-6">
            <v-btn color="teal" dark @click="submit" large>Send Message</v-btn>
            <v-btn text @click="dialog = false" large>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </main>
  </div>
</template>

<script>
export default {
  name: "ServicesPageV2",
  data: () => ({
    dialog: false,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    services: [
      {
        id: 1,
        title: "Web Development",
        description: "Crafting beautiful and functional websites for the modern web.",
        icon: "mdi-web",
      },
      {
        id: 2,
        title: "Mobile App Development",
        description: "Building intuitive and powerful mobile experiences for all devices.",
        icon: "mdi-cellphone",
      },
      {
        id: 3,
        title: "UI/UX Design",
        description: "Designing user-centric interfaces that are both beautiful and easy to use.",
        icon: "mdi-palette-swatch-outline",
      },
    ],
    features: [
      {
        icon: 'mdi-creation',
        title: 'Creative Solutions',
        text: 'We think outside the box to find the best solutions for your unique needs.'
      },
      {
        icon: 'mdi-rocket-launch',
        title: 'Fast Delivery',
        text: 'We work efficiently to deliver high-quality results on time, every time.'
      },
      {
        icon: 'mdi-head-heart-outline',
        title: 'Dedicated Support',
        text: 'Our team is always here to help you with any questions or concerns.'
      }
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log('Form submitted successfully');
        this.dialog = false;
      }
    }
  }
};
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
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.why-choose-us-v2 {
  background-color: #474747;
  border-radius: 16px;
  padding: 4rem 0;
}

.feature-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.feature-item:hover {
  transform: translateY(-8px);
}
</style>
