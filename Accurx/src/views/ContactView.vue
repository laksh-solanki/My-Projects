<template>
  <div class="p-4">
    <form @submit.prevent="submitForm" method="POST" aria-label="Contact form">
      <v-text-field v-model="form.name" label="Name" :rules="[(v) => !!v || 'Name is required']" required outlined dense
        aria-required="true" />
      <v-text-field v-model="form.email" label="Email" :rules="[
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ]" required outlined dense aria-required="true" />
      <v-textarea v-model="form.message" label="Message" outlined dense rows="4" />
      <v-btn :loading="loading" type="submit" color="primary" class="mt-4" aria-label="Submit contact form">
        Submit
      </v-btn>
    </form>

    <Success ref="successRef" />
    <Unsuccess ref="unsuccessRef" />
  </div>
</template>

<script>
import Success from '@/components/Success.vue'
import Unsuccess from '@/components/Unsuccess.vue'

export default {
  components: {
    Success,
    Unsuccess,
  },
  data() {
    return {
      form: { name: '', email: '', message: '' },
      loading: false,
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw7SB2bmN4PBnkl9NG--4IXrhglSs6dTauUjFlopNqT94gkXd9ZKfcq6KG3GyUL18A5/exec", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form)
        });

        if (response.ok) {
          try {
            const result = await response.json();
            if (result.status === "success") {
              this.form = { name: "", email: "", message: "" };
              this.$refs.successRef.showSnackbar();
            } else {
              this.$refs.unsuccessRef.showSnackbar();
            }
          } catch (jsonErr) {
            // If can't parse JSON (e.g., no-cors mode), assume success
            this.$refs.successRef.showSnackbar();
            this.form = { name: "", email: "", message: "" };
          }
        } else {
          this.$refs.unsuccessRef.showSnackbar();
        }
      } catch (err) {
        this.$refs.unsuccessRef.showSnackbar();
      }
    }
  },
}
</script>
