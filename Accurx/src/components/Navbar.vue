<template>
  <v-app-bar app color="blue-darken-2" height="70" dark>
    <v-container class="d-flex align-center">
      <v-toolbar-title>
        <router-link class="navbar-brand w-100" to="/"><img src="@/assets/main_logo.png" class="rounded-4 "
          width="100"
            alt="Accurx Logo"></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex align-center w-75">
        <v-tabs v-model="tab" @update:modelValue="$emit('update:tab', $event)" centered>
          <v-tab value="home">Home</v-tab>
          <v-tab value="about">About</v-tab>
          <v-tab value="services">Services</v-tab>
          <v-tab value="contact">Contact</v-tab>
        </v-tabs>
        <search-bar class="w-50"></search-bar>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list>
      <v-list-item>
        <search-bar></search-bar>
      </v-list-item>
      <v-list-item @click="updateTab('home')">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item @click="updateTab('about')">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item @click="updateTab('services')">
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item @click="updateTab('contact')">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "AppNavbar",
  components: {
    SearchBar,
  },
  data() {
    return {
      drawer: false,
      tab: 'home',
    };
  },
  methods: {
    updateTab(tab) {
      this.tab = tab;
      this.$emit('update:tab', tab);
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

.navbar-brand {
  margin-left: 12px;
 & img {
    max-width: 100%;
    height: auto;
  }
}
</style>
