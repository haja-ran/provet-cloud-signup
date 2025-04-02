<script setup lang="ts">
definePageMeta({
  name: 'LogoIpsum',
  title: 'Welcome to Logo Ipsum',
})
</script>

<template>
  <div class="page">
    <NuxtLink class="signup-button" to="/signup">
      <provet-button variant="primary" size="xl">
        Sign Up
      </provet-button>
    </NuxtLink>
  </div>
</template>

<style scoped>
.page {
  height: 100dvh;
  display: flex;
}

.signup-button {
  margin: auto;
}
</style>
