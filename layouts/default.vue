<template>
  <div class="page n-reset">
    <TheNavBar />
    <slot />
  </div>
</template>

<style scoped>
.page {
  --navigation-height: 5rem;
}
</style>
