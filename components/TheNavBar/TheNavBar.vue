<template>
  <header class="navigation">
    <NuxtLink class="logo-link" to="/">
      <TheLogo />
    </NuxtLink>

    <provet-button size="s">Help</provet-button>
  </header>
</template>

<style scoped>
.navigation {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--navigation-height, 5rem);
  top: 0;
  left: 0;
  width: 100%;
  padding-inline: var(--n-space-l);
  z-index: 100;
}

.logo-link {
  display: inline-flex;
}
</style>