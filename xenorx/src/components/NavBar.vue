<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Xenorx</v-toolbar-title>
    <v-spacer />
    <v-tabs align-with-title :model-value="tab" @update:model-value="$emit('update:tab', $event)">
      <v-tab value="home">Home</v-tab>
      <v-tab value="about">About</v-tab>
      <v-tab value="contact">Contact</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script setup>
  defineProps(['tab'])
  defineEmits(['update:tab'])
</script>
