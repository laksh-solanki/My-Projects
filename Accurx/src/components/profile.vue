<template>
  <v-container>
    <v-row justify="center">
      <v-menu min-width="200px">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="brown" size="large">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card rounded="4" width="220">
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="brown" size="large">
                <span class="text-h6">{{ user.initials }}</span>
              </v-avatar>
               
              <h3 class="mt-3">{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text" @click="$router.push('/signin')"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text"> Disconnect </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>
<script setup>
import { reactive } from 'vue'

const user = reactive({
  initials: 'LS',
  fullName: 'Laksh Solanki',
  email: 'lakshsolanki848@gmail.com',
})
</script>
