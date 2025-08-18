<template>
  <div class="signin-page">
    <h1>Sign In Page</h1>
    <p>This is the new sign-in page.</p>
    <!-- Add your sign-in form or content here -->
    <h1>Is Initialized: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>Is Authorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
    <h2 v-if='user'>Logged in user: {{ user }}</h2>
    <v-btn @click='handleSignIn' :disabled='!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized'>Sign In</v-btn>
    <v-btn @click='handleSignOut' :disabled='!Vue3GoogleOauth.isAuthorized'>Sign Out</v-btn>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'SignInView',

  data() {
    return {
      user: '',
    }
  },

  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // console.log(this.$gAuth.signIn);

        if (!googleUser) {
          return null;
        }

        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.log(error);
        return null;
      }

    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        // console.log(this.$gAuth.signOut);

        this.user = '';
      } catch (error) {
        console.log(error);
      }
    }
  },

  setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    return {
      Vue3GoogleOauth,
    };
  }
}

</script>

<style scoped>
.signin-page {
  padding: 20px;
  text-align: center;
}
</style>