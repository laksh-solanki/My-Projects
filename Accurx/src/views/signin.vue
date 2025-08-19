<template>
  <div class="signin-page">
    <h1>Sign In Page</h1>
    <p>This is the new sign-in page.</p>
    <!-- Add your sign-in form or content here -->
    <h2 v-if="user">User Email:- {{ user.email }}</h2>
    <h2 v-if="user">User Fullname:- {{ user.fullName }}</h2>
    <button @click="signIn" class="btn btn-success m-1">Sign In</button>
    <button @click="signOut" class="btn btn-danger m-1">Sign Out</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref(null)

const signIn = () => {
  // Simple local user object for demonstration
  user.value = {
    email: ' lakshsolanki848@gmail.com',
    fullName: ' Laksh Solanki',
    initials: 'LS',
  }
}

const signOut = () => {
  user.value = null
}
</script>

<style scoped>
.signin-page {
  padding: 20px;
  text-align: center;
}
</style>
