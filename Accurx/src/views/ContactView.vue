<template>
  <div class="contact-page">
    <h1 class="text-center display-4 fw-bold mb-5">Contact Us</h1>
    <div class="form-section">
      <div class="form-container contact-form" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        <Timeline :currentStep="currentStep" />
        <h2 class="mb-4 text-center">Send Us a Message</h2>
        <div class="form-step" :class="getFormClasses(0)">
          <div class="p-4 rounded shadow-lg">
            <form @submit.prevent="submitStep1" novalidate>
              <v-text-field v-model="form.name" label="Name" :rules="[(v) => !!v || 'Name is required']" required
                outlined dense />
              <v-text-field v-model="form.email" label="Email" :rules="[
                (v) => !!v || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
              ]" required outlined dense />
              <v-btn :loading="loading" type="submit" color="primary" class="mt-4">Next</v-btn>
            </form>
          </div>
        </div>

        <div class="form-step" :class="getFormClasses(1)">
          <div class="p-4 rounded shadow-lg">
            <form @submit.prevent="submitStep2" novalidate>
              <v-textarea v-model="form.message" label="Message" :rules="[(v) => !!v || 'Message is required']" required
                outlined dense rows="4" />
              <div class="d-flex justify-space-between mt-5">
                <v-btn color="secondary" @click="prevStep">Back</v-btn>
                <v-btn :loading="loading" type="submit" color="primary">Next</v-btn>
              </div>
            </form>
          </div>
        </div>

        <div class="form-step" :class="getFormClasses(2)">
          <div class="p-4 rounded shadow-lg">
            <form @submit.prevent="submitStep3" novalidate>
              <v-text-field v-model="form.phone" label="Phone" :rules="[(v) => !!v || 'Phone number is required']"
                required outlined dense />
              <div class="d-flex justify-space-between">
                <v-btn color="secondary" @click="prevStep">Back</v-btn>
                <v-btn :loading="loading" type="submit" color="primary">Submit</v-btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="info-section">
      <v-card class="contact-info pa-4 mb-4" elevation="8">
        <h2 class="mb-4 text-center">Contact Details</h2>
        <v-list dense class="transparent">
          <v-list-item class="mb-2">
            <v-list-item-icon>
              <v-icon color="primary" size="large">mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Address:</v-list-item-title>
              <v-list-item-subtitle>123 Tile Street, Flooring City, FC 12345</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mb-2">
            <v-list-item-icon>
              <v-icon color="primary" size="large">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Phone:</v-list-item-title>
              <v-list-item-subtitle>+1 (123) 456-7890</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mb-2">
            <v-list-item-icon>
              <v-icon color="primary" size="large">mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Email:</v-list-item-title>
              <v-list-item-subtitle>info@yourtilecompany.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" size="large">mdi-clock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Hours:</v-list-item-title>
              <v-list-item-subtitle>Mon - Fri: 9:00 AM - 5:00 PM</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card class="contact-info pa-4 mb-4" elevation="8">
        <v-card-title class="text-center justify-center">
          <h2 class="text-h5">Why Contact Us?</h2>
        </v-card-title>
        <v-card-text>
          <v-list dense class="transparent">
            <v-list-item class="mb-2">
              <v-list-item-icon>
                <v-icon color="success" size="large">mdi-check-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Expert Advice:</v-list-item-title>
                <v-list-item-subtitle>Get personalized recommendations for your tiling needs.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="mb-2">
              <v-list-item-icon>
                <v-icon color="warning" size="large">mdi-lightbulb</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Innovative Solutions:</v-list-item-title>
                <v-list-item-subtitle>Discover cutting-edge tiling techniques and materials.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="info" size="large">mdi-chat</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Dedicated Support:</v-list-item-title>
                <v-list-item-subtitle>Our team is here to assist you every step of the way.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <Success ref="successRef" />
    <Unsuccess ref="unsuccessRef" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Timeline from '@/components/Timeline.vue';
import Success from '@/components/Success.vue';
import Unsuccess from '@/components/Unsuccess.vue';

export default {
  components: {
    Timeline,
    Success,
    Unsuccess,
  },
  setup() {
    const currentStep = ref(0);
    const loading = ref(false);
    const successRef = ref(null);
    const unsuccessRef = ref(null);
    const form = ref({
      name: '',
      email: '',
      message: '',
      phone: '',
    });
    const touchStartX = ref(0);
    const touchEndX = ref(0);

    const prevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--;
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.value = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e) => {
      touchEndX.value = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchEndX.value - touchStartX.value;
      const minSwipeDistance = 50; // Minimum distance to be considered a swipe

      if (swipeDistance > minSwipeDistance) {
        // Swipe right - go to previous step
        prevStep();
      } else if (swipeDistance < -minSwipeDistance) {
        // Swipe left - go to next step if valid
        if (currentStep.value === 0 && validateStep1()) {
          currentStep.value = 1;
        } else if (currentStep.value === 1 && form.value.message) {
          currentStep.value = 2;
        }
      }
    };

    const getFormClasses = (stepNumber) => {
      return {
        active: currentStep.value === stepNumber,
        prev: currentStep.value > stepNumber,
      };
    };

    const submitStep1 = () => {
      if (!validateStep1()) return;

      const currentForm = document.querySelector('.form-step.active');
      currentForm?.classList.add('sliding-out');

      setTimeout(() => {
        currentStep.value = 1;
        currentForm?.classList.remove('sliding-out');
      }, 300);
    };

    const validateStep1 = () => {
      if (!form.value.name || !form.value.email || !/.+@.+\..+/.test(form.value.email)) {
        alert('Please enter valid name and email');
        return false;
      }
      return true;
    };

    const submitStep2 = () => {
      if (!form.value.message) {
        alert('Please enter a message.');
        return;
      }
      currentStep.value = 2;
    };

    const submitStep3 = async () => {
      if (!form.value.phone) {
        alert('Please enter a phone number.');
        return;
      }
      loading.value = true;
      try {
        await fetch(
          'https://script.google.com/macros/s/AKfycbwAKAPVgDd0I2spFEYhcsO0KdqEuDRMZ5uGjawGBb5o6zWZWLRU_AF0wYuc-HVDL8y4/exec',
          {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form.value),
          }
        );
        form.value = { name: '', email: '', message: '', phone: '' };
        currentStep.value = 0;
        successRef.value?.show();
      } catch (err) {
        unsuccessRef.value?.show();
      } finally {
        loading.value = false;
      }
    };

    return {
      currentStep,
      loading,
      form,
      prevStep,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      submitStep1,
      submitStep2,
      submitStep3,
      successRef,
      unsuccessRef,
      getFormClasses,
    };
  },
};
</script>

<style scoped>
.contact-page {
  background-color: #000;
  color: #fff;
  min-height: 900px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.form-section {
  grid-column: 1 / 8;
}

.info-section {
  grid-column: 8 / 13;
}

.timeline-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(26, 26, 26, 0.5);
  border-radius: 8px;
}

.form-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.form-step {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
  transform: translateX(100%);
}

.form-step.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 1;
}

.form-step.prev {
  transform: translateX(-100%);
}

.contact-form {
  background-color: #1a1a1a;
  border: 3px solid #333;
  width: 100%;
  height: 500px;
  margin: 0 auto;
}

.v-btn {
  text-transform: none;
  min-width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sliding-out {
  animation: slideOut 0.3s forwards;
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
