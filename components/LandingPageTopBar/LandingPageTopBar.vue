<template>
  <header class="navigation">
    <div class="container">
      <NuxtLink class="logo-link" to="/">
        <TheLogo />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.navigation {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
}

.container {
  width: 100%;
  max-width: var(--landing-page-max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--landing-page-top-bar-height, 5rem);
  padding-inline: var(--n-space-l);
}

.logo-link {
  display: inline-flex;
}
</style>
