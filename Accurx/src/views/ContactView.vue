<template>
  <div class="p-4">
    <form @submit.prevent="submitForm" method="POST" aria-label="Contact form">
      <v-text-field
        v-model="form.name"
        label="Name"
        :rules="[v => !!v || 'Name is required']"
        required
        outlined
        dense
        aria-required="true"
      />
      <v-text-field
        v-model="form.email"
        label="Email"
        :rules="[
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ]"
        required
        outlined
        dense
        aria-required="true"
      />
      <v-textarea
        v-model="form.message"
        label="Message"
        outlined
        dense
        rows="4"
      />
      <v-btn
        :loading="loading"
        type="submit"
        color="primary"
        class="mt-4"
        aria-label="Submit contact form"
      >
        Submit
      </v-btn>
    </form>

    <p v-if="successMsg" role="alert" style="color:green">{{ successMsg }}</p>
    <p v-if="errorMsg" role="alert" style="color:red">{{ errorMsg }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { CONFIG } from '@/config.js'

export default {
  data() {
    return {
      form: { name: "", email: "", message: "" },
      successMsg: "",
      errorMsg: "",
      loading: false
    };
  },
  methods: {
    async submitForm() {
      this.successMsg = ""
      this.errorMsg = ""
      this.loading = true
      try {
        const response = await fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form)
        });

        const result = await response.json();
        if (result.status === "success") {
          this.successMsg = "Form submitted successfully!";
          this.resetForm()
        } else {
          this.errorMsg = "Submission failed. Please try again.";
        }
      } catch (err) {
        this.errorMsg = "Error: " + err.message;
      } finally {
        this.loading = false
      }
    },
    resetForm() {
      this.form.name = ""
      this.form.email = ""
      this.form.message = ""
    }
  }
};
</script>
