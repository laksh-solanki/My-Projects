<template>
  <v-app>
    <NavBar :tab="tab" @update:tab="tab = $event" />
    <v-main>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="home">
          <HeroSection />
        </v-tabs-window-item>
        <v-tabs-window-item value="about">
          <v-container>
            <v-row class="text-center">
              <v-col cols="12">
                <h1>About Us</h1>
                <p>We are a team of passionate developers dedicated to creating the best web experiences.</p>
              </v-col>
            </v-row>

            <v-card>
              <v-tabs v-model="aboutTab" bg-color="primary" dark>
                <v-tab value="mission">Our Mission</v-tab>
                <v-tab value="team">Meet the Team</v-tab>
              </v-tabs>

              <v-card-text>
                <v-tabs-window v-model="aboutTab">
                  <v-tabs-window-item value="mission">
                    <p class="text-center">Our mission is to deliver high-quality, scalable, and user-friendly web
                      applications that help our clients achieve their business goals. We believe in the power of
                      technology to transform businesses and we are passionate about using our skills to make a positive
                      impact.</p>
                  </v-tabs-window-item>
                  <v-tabs-window-item value="team">
                    <v-row>
                      <v-col v-for="member in team" :key="member.name" cols="12" md="4">
                        <v-card class="mx-auto" max-width="344">
                          <v-avatar class="ma-3" size="125" tile>
                            <v-img :src="member.avatar" />
                          </v-avatar>
                          <v-card-title>{{ member.name }}</v-card-title>
                          <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                          <v-card-text>{{ member.bio }}</v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>
                </v-tabs-window>
              </v-card-text>
            </v-card>
          </v-container>
        </v-tabs-window-item>
        <v-tabs-window-item value="contact">
          <v-container>
            <v-row class="text-center">
              <v-col cols="12">
                <h1>Contact Us</h1>
                <p>Get in touch with us to start your next project.</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <h2 class="text-h4 my-5">Contact Information</h2>
                <p><v-icon>mdi-email</v-icon> contact@xenorx.com</p>
                <p><v-icon>mdi-phone</v-icon> +1 234 567 890</p>
                <p><v-icon>mdi-map-marker</v-icon> 123 Main St, Anytown, USA</p>
              </v-col>
              <v-col md="6">
                <h2 class="text-h4 my-5">Send us a message</h2>
                <v-form>
                  <v-text-field label="Name" outlined />
                  <v-text-field label="Email" outlined />
                  <v-textarea label="Message" outlined />
                  <v-btn color="primary" large @click="snackbar = true">Submit</v-btn>
                </v-form>
              </v-col>
              <div class="text-center">
                <v-snackbar v-model="snackbar" color="success" :timeout="timeout">
                  {{ text }}
                  <template #actions>
                    <v-btn color="black" variant="text" @click="snackbar = false">
                      Close
                    </v-btn>
                  </template>
                </v-snackbar>
              </div>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import AppFooter from '@/components/AppFooter.vue'
  import HeroSection from '@/components/HeroSection.vue'
  import NavBar from '@/components/NavBar.vue'

  const tab = ref('home')
  const aboutTab = ref('mission')
  const snackbar = ref(false)
  const text = ref('Sign in Successfully')
  const timeout = ref(2000)

  const team = ref([
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'John is a visionary leader with a passion for innovation and technology.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Jane is a talented developer with a knack for solving complex problems.',
    },
    {
      name: 'Peter Jones',
      role: 'UI/UX Designer',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Peter is a creative designer who loves to create beautiful and intuitive user interfaces.',
    },
  ])
</script>

<style lang="scss" scoped>
.v-main {
  background-color: var(--v-theme-surface);
  transition: background-color 0.5s ease;
}
</style>
