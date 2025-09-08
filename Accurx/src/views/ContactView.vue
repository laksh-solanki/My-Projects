<template>
  <div class="contact-page container-fluid py-5 text-white">
    <div class="container">
      <h1 class="text-center display-4 fw-bold" style="margin-bottom: 50px; margin-top: 20px;">Contect Us</h1>
      <div class="row">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="contact-form p-4 rounded shadow-lg">
            <h2 class="mb-4 text-center">Send Us a Message</h2>
            <form @submit.prevent="submitForm" method="POST" aria-label="Contact form" novalidate>
              <v-text-field v-model="form.name" label="Name" :rules="[(v) => !!v || 'Name is required']" required
                outlined dense aria-required="true" />
              <v-text-field v-model="form.email" label="Email" :rules="[
                (v) => !!v || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
              ]" required outlined dense aria-required="true" />
              <v-textarea v-model="form.message" label="Message" :rules="[(v) => !!v || 'Message is required']" required
                outlined dense rows="4" />
              <v-btn :loading="loading" type="submit" color="primary" class="mt-4" aria-label="Submit contact form">
                Submit
              </v-btn>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="contact-info p-4 rounded shadow-lg mb-4">
            <h2 class="mb-4 text-center">Contact Details</h2>
            <ul class="list-unstyled">
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-geo-alt-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Address:</strong><br />
                  123 Tile Street, Flooring City, FC 12345
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-telephone-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Phone:</strong><br />
                  +1 (123) 456-7890
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-envelope-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Email:</strong><br />
                  info@yourtilecompany.com
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-clock-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Hours:</strong><br />
                  Mon - Fri: 9:00 AM - 5:00 PM
                </div>
              </li>
            </ul>
          </div>
          <div class="contact-info p-4 rounded shadow-lg mb-4">
            <h2 class="mb-4 text-center">Why Contact Us?</h2>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill me-3 fs-5 text-success"></i>
                <div>
                  <strong>Expert Advice:</strong> Get personalized recommendations for your tiling
                  needs.
                </div>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-lightbulb-fill me-3 fs-5 text-warning"></i>
                <div>
                  <strong>Innovative Solutions:</strong> Discover cutting-edge tiling techniques and
                  materials.
                </div>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-chat-dots-fill me-3 fs-5 text-info"></i>
                <div>
                  <strong>Dedicated Support:</strong> Our team is here to assist you every step of
                  the way.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Success ref="successRef" />
  <Unsuccess ref="unsuccessRef" />
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
      this.loading = true;
      try {
        await fetch("https://script.google.com/macros/s/AKfycbw7SB2bmN4PBnkl9NG--4IXrhglSs6dTauUjFlopNqT94gkXd9ZKfcq6KG3GyUL18A5/exec", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form)
        });
        // Since no-cors, assume success if no error
        this.form = { name: "", email: "", message: "" };
        this.$refs.successRef.showSnackbar();
      } catch (err) {
        this.$refs.unsuccessRef.showSnackbar();
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>

<style scoped>
.contact-page {
  background-color: #000;
  color: #fff;
  height: 900px;
}

.contact-form,
.contact-info {
  background-color: #1a1a1a;
  border: 3px solid #333;
  width: 100%;
}

.form-control-dark {
  background-color: #333;
  color: #fff;
  border-color: #555;
}

.form-control-dark:focus {
  background-color: #333;
  color: #fff;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.list-unstyled li i {
  color: #0d6efd;
}
</style>
