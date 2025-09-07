<script setup>
import { onMounted } from 'vue'
import cardRoll from '@/components/card-roll.vue'

defineOptions({
  name: 'AboutPage',
  components: {
    cardRoll
  },
})

onMounted(() => {
  const accordionHeaders = document.querySelectorAll('.accordion-header')

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const accordionItem = header.closest('.accordion-item')
      accordionItem.classList.toggle('active')
    })
  })
})
</script>

<template>
  <div class="professional-container">
    <section class="about-hero-section">
      <h1 class="about-title">Our Commitment to Excellence</h1>
      <p class="about-subtitle">
        Dedicated to delivering superior quality and unparalleled service in every project.
      </p>
    </section>
    <section class="mission-section">
      <h2 class="section-title">Our Core Values</h2>
      <div class="accordion-container">
        <div class="accordion-item">
          <div class="accordion-header">
            <h3>Integrity</h3>
            <span class="icon">+</span>
          </div>
          <div class="accordion-content">
            <p>
              We uphold the highest standards of integrity in all our actions, fostering trust and
              transparency with our clients and partners.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h3>Quality</h3>
            <span class="icon">+</span>
          </div>
          <div class="accordion-content">
            <p>
              We are committed to delivering products and services of exceptional quality, ensuring
              durability, performance, and aesthetic appeal.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h3>Client Focus</h3>
            <span class="icon">+</span>
          </div>
          <div class="accordion-content">
            <p>
              Our clients are at the heart of everything we do. We strive to understand their needs
              and exceed their expectations through personalized solutions and dedicated support.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="cardroll">
      <cardRoll></cardRoll>
    </section>
  </div>
</template>

<style scoped>
.professional-container {
  font-family: 'Roboto', sans-serif;
  /* Professional, clean font */
  min-height: 100vh;
  padding: 2rem;
}

/* Global Section Styling */
section {
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: #2c3e50;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #ffffff;
  /* Dark blue-gray for titles */
  font-weight: 700;
}

/* About Hero Section */
.about-hero-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  border-radius: 8px;
  margin-bottom: 4rem;
}

.about-title {
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.about-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
}

/* Accordion Styling */
.accordion-container {
  max-width: 900px;
  margin: 0 auto;
}

.accordion-item {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #cacaca;
}

.accordion-header h3 {
  margin: 0;
}

.accordion-header .icon {
  font-size: 1.8rem;
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.accordion-item.active .accordion-header .icon {
  transform: rotate(135deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    padding 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: 0 1.5rem;
  margin-top: 10px;
  color: #555;
  font-size: 1rem;
}

.accordion-item.active .accordion-content {
  max-height: 200px;
  /* Adjust as needed */
  padding-bottom: 1.5rem;
}

.cardroll {
  height: 600px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-title {
    font-size: 3rem;
  }

  .about-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .accordion-header {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 2.5rem;
  }

  .about-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .accordion-header {
    font-size: 1rem;
  }
}
</style>
