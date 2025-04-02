<template>
  <div class="page n-reset">
    <LandingPageTopBar />
    <slot />
  </div>
</template>

<style scoped>
.page {
  max-width: var(--landing-page-max-width);
  margin: 0 auto;
}
</style>
