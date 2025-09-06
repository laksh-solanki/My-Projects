<script setup>
import { ref, computed } from 'vue'
defineOptions({
  name: 'TileCards',
})
import TileCards from '@/components/Tilecards.vue'
import TileNavbar from '@/components/TileNavbar.vue'

const selectedName = ref(null)
const loading = ref(false)

const cards = [
  { imageSrc: "/Photos/Til-1.jpeg", title: "Elegant Ceramic Tiles", description: "Chief Executive Officer", stock: "In Stock", price: "₹150" },
  { imageSrc: "/Photos/Til-1.jpeg", title: "Elegant Ceramic Tiles", description: "Chief Executive Officer", stock: "In Stock", price: "₹150" },   
  { imageSrc: "/Photos/Til-2.avif", title: "Durable floor Porcelain Tiles", description: "Head of Operations", stock: "In Stock", price: "₹120" },
  { imageSrc: "/Photos/Til-3.webp", title: "Comfortable Vinyl Flooring", description: "Director of Client", stock: "In Stock", price: "₹130" },
  { imageSrc: "/Photos/Til-4.jpg", title: "Modern Laminate Flooring", description: "Marketing Manager", stock: "In Stock", price: "₹140" },
  { imageSrc: "/Photos/Til-5.jpg", title: "Natural Stone Tiles", description: "Product Manager", stock: "In Stock", price: "₹160" },
  { imageSrc: "/Photos/Til-6.webp", title: "Eco-friendly Bamboo Flooring", description: "Sales Lead", stock: "In Stock", price: "₹170" },
  { imageSrc: "/Photos/Til-7.jpg", title: "Classic Marble Tiles", description: "Customer Support", stock: "In Stock", price: "₹180" },
  { imageSrc: "/Photos/Til-8.webp", title: "Rustic Terracotta Tiles", description: "Business Analyst", stock: "In Stock", price: "₹190" },
  { imageSrc: "/Photos/Til-9.avif", title: "Sleek Glass Tiles", description: "Financial Advisor", stock: "In Stock", price: "₹200" },
  { imageSrc: "/Photos/Til-10.jpg", title: "Textured Concrete Tiles", description: "HR Manager", stock: "In Stock", price: "₹210" },
  { imageSrc: "/Photos/Til-11.jpg", title: "Patterned Cement Tiles", description: "IT Specialist", stock: "In Stock", price: "₹220" },
  { imageSrc: "/Photos/Til-12.jpg", title: "Wood-look Porcelain Tiles", description: "Logistics Coordinator", stock: "In Stock", price: "₹230" },
]

const filteredCards = computed(() => {
  if (!selectedName.value) return cards
  return cards.filter(card => card.title.toLowerCase().includes(selectedName.value.toLowerCase()))
})

const breadcrumbItems = computed(() => {
  return [{ text: selectedName.value || 'All Tiles', disabled: true }]
})

function onNameSelected(name) {
  loading.value = true
  selectedName.value = name
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <TileNavbar @name-selected="onNameSelected" />
  <v-breadcrumbs :items="breadcrumbItems" class="mb-4" />
  <section class="Tile-section">
    <div class="cards-grid">
      <v-skeleton-loader v-if="loading" type="card" v-for="n in 6" :key="n" />
      <TileCards v-else v-for="(card, index) in filteredCards" :key="index" v-bind="card" :selectedName="selectedName" />
    </div>
  </section>
</template>

<style>
.tile-view {
  padding: 4rem 2rem;
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  border-radius: 8px;
  margin-top: 30px;
}

.Tile-section {
  padding: 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  justify-content: center;
}
</style>