<template>
  <div class="signin-page">
    <h1>Sign In Page</h1>
    <form class="form mt-5" @submit.prevent="handleSubmit">
    <span class="input-span">
      <label for="username" class="label">Username</label>
      <input type="text" name="username" id="username" v-model="formData.username" />
    </span>
      <span class="input-span">
        <label for="email" class="label">Email</label>
        <input type="email" name="email" id="email" v-model="formData.email" /></span>
      <span class="input-span">
        <label for="password" class="label">Password</label>
        <input type="password" name="password" id="password" v-model="formData.password" /></span>
      <span class="span"><a href="#">Forgot password?</a></span>
      <input class="submit" type="submit" value="Log in" />
      <span class="span">Don't have an account? <a href="#">Sign up</a></span>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value); // Debugging log

  // Create user data object with initials from username
  const userData = {
    username: formData.value.username,
    email: formData.value.email,
    initials: formData.value.username ? formData.value.username.charAt(0).toUpperCase() : 'U',
    fullName: formData.value.username
  }
  
  // Sign in the user
  authStore.signIn(userData)
  console.log('User signed in:', authStore.user); // Debugging log
  
  // Redirect to home page
  router.push('/')
}
</script>

<style scoped>
.signin-page {
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.form .input-span {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form input[type="text"],
.form input[type="email"],
.form input[type="password"] {
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #6b6b6b;
  outline: 2px solid #000000;
}

.form input[type="text"]:focus,
.form input[type="email"]:focus,
.form input[type="password"]:focus {
  outline: 2px solid #58bc82;
}

.label {
  align-self: flex-start;
  color: #58bc82;
  font-weight: 600;
}

.form .submit {
  padding: 1rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: #6b6b6b;
  color: #efefef;
  border: none;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  font-size: 0.9rem;
}

.form .submit:hover {
  background-color: #58bc82;
  color: #000000;
}

.span {
  text-decoration: none;
  color: #ffffff;
}

.span a {
  color: #58bc82;
}
</style>
