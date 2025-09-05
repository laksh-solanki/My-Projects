<script setup>
defineOptions({
  name: 'TileCards',
})
import TileCards from '@/components/Tilecards.vue'
import TileNavbar from '@/components/TileNavbar.vue'

</script>

<template>
  <TileNavbar />
  <section class="Tile-section">
    <div class="cards-grid">
      <TileCards imageSrc="/Photos/Til-1.jpeg" title="Elegant floor Ceramic Tiles" description="Chief Executive Officer"
        stock="In Stock" price="₹150" />
      <TileCards imageSrc="/Photos/Til-2.avif" title="Durable floor Porcelain Tiles" description="Head of Operations"
        stock="In Stock" price="₹120" />
      <TileCards imageSrc="/Photos/Til-3.webp" title="Comfortable Vinyl Flooring" description="Director of Client"
        stock="In Stock" price="₹130" />
      <TileCards imageSrc="/Photos/Til-4.jpg" title="Modern Laminate Flooring" description="Marketing Manager"
        stock="In Stock" price="₹140" />
      <TileCards imageSrc="/Photos/Til-5.jpg" title="Natural Stone Tiles" description="Product Manager"
        stock="In Stock" price="₹160" />
      <TileCards imageSrc="/Photos/Til-6.webp" title="Eco-friendly Bamboo Flooring" description="Sales Lead"
        stock="In Stock" price="₹170" />
      <TileCards imageSrc="/Photos/Til-7.jpg" title="Classic Marble Tiles" description="Customer Support"
        stock="In Stock" price="₹180" />
      <TileCards imageSrc="/Photos/Til-8.webp" title="Rustic Terracotta Tiles" description="Business Analyst"
        stock="In Stock" price="₹190" />
      <TileCards imageSrc="/Photos/Til-9.avif" title="Sleek Glass Tiles" description="Financial Advisor"
        stock="In Stock" price="₹200" />
      <TileCards imageSrc="/Photos/Til-10.jpg" title="Textured Concrete Tiles" description="HR Manager"
        stock="In Stock" price="₹210" />
      <TileCards imageSrc="/Photos/Til-11.jpg" title="Patterned Cement Tiles" description="IT Specialist"
        stock="In Stock" price="₹220" />
      <TileCards imageSrc="/Photos/Til-12.jpg" title="Wood-look Porcelain Tiles" description="Logistics Coordinator"
        stock="In Stock" price="₹230" />
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
  