<script>
import TileCard from '../components/TileCard.vue'

export default {
  name: 'HomePage',
  components: {
    TileCard,
  },
}
</script>

<template>
  <div class="professional-container">
    <!-- Hero Section -->
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="rounded-5 sec" height="607">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Elevate Your Space with Premium Flooring Solutions</h1>
          <p class="hero-subtitle">
            Discover high-quality, durable, and aesthetically pleasing flooring options for every
            environment.
          </p>
        </div>
        <router-link to="/contact" class="professional-button">
          contact us
        </router-link>
      </section>
    </v-parallax>

    <!-- Tile Types Section -->
    <section class="tiles-section">
      <h2 class="section-title">Our Diverse Flooring Collections</h2>
      <div class="tiles-grid">
        <TileCard imageSrc="/Photos/Til-1.jpeg" title="Elegant Ceramic Tiles"
          description="Versatile and robust, ideal for both residential and commercial applications."
          price="$2.50/sq ft" />
        <TileCard imageSrc="/Photos/Til-2.avif" title="Durable Porcelain Tiles"
          description="Highly resistant to wear and moisture, perfect for high-traffic areas." price="$3.00/sq ft" />
        <TileCard imageSrc="/Photos/Til-3.webp" title="Comfortable Vinyl Flooring"
          description="Affordable, easy to maintain, and comfortable underfoot price and design." price="$1.75/sq ft" />
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section ">
      <h2 class="section-title">Why Partner with Us?</h2>
      <div class="features-grid">
        <div class="feature-item">
          <h3>Uncompromising Quality</h3>
          <p>We source only the finest materials from reputable global manufacturers.</p>
        </div>
        <div class="feature-item">
          <h3>Expert Installation</h3>
          <p>Our certified professionals ensure a precise and lasting installation.</p>
        </div>
        <div class="feature-item">
          <h3>Client Satisfaction</h3>
          <p>Dedicated to exceeding your expectations from selection to project completion.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.professional-container {
  font-family: 'Roboto', sans-serif;
  /* Professional, clean font */
  min-height: 100vh;
  padding: 2rem 1rem 1rem 1rem;
}

/* Global Section Styling */
section {
  background-color: #2c3e50;
  /* Dark blue-gray background */
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.9rem;
  color: #e4e8ec;
  /* Dark blue-gray for titles */
  font-weight: 700;
}

.sec {
  margin-bottom: 40px;
}

/* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 82vh;
  background-color: transparent;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 4rem;
  box-shadow: none;
}

.hero-content {
  max-width: 800px;
  padding: 1rem;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* From Uiverse.io by adamgiebl */
.professional-button {
  font-size: 18px;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #5fd4f5 0%, #5468FF 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 12px;
  border-radius: 0.3em;
  color: #fff;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  text-decoration: none;
  text-align: center;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.professional-button:hover {
  box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
  transform: translateY(-0.1em);
}

.professional-button:active {
  box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
  transform: translateY(0em);
}

.tiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 2fr));
  gap: 2rem;
  justify-content: center;
}

/* Why Choose Us Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.feature-item {
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.feature-item h3 {
  color: #007bff;
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
}

.feature-item p {
  color: #555;
  font-size: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .professional-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .professional-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
