<template>
  <v-app theme="dark">
    <Navbar @update:tab="updateTab" />
    <v-main>
      <v-window v-model="tab">
        <v-window-item value="home">
          <HomeView />
        </v-window-item>
        <v-window-item value="about">
          <AboutView />
        </v-window-item>
        <v-window-item value="services">
          <ServicesView />
        </v-window-item>
        <v-window-item value="contact">
          <ContactView />
        </v-window-item>
      </v-window>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ServicesView from './views/ServicesView.vue';
import ContactView from './views/ContactView.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomeView,
    AboutView,
    ServicesView,
    ContactView,
    Footer,
  },
  data() {
    return {
      tab: 'home',
    };
  },
  methods: {
    updateTab(tab) {
      this.tab = tab;
    },
  },
};
</script>

<style>
/* Add any global styles here */
</style>
