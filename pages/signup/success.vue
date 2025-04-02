<script lang="ts" setup>
definePageMeta({
  name: 'Success',
  title: 'You\'re In',
})
</script>

<template>
  <div class="container n-color-surface-raised">
    <div class="inner n-stack n-items-center n-gap-xl">
      <provet-icon
        name="interface-checked-circle"
        size="xl"
        class="n-color-text-success"
      />

      <div class="n-stack n-items-center n-gap-l">
        <h1 class="n-typescale-xxxl n-font-weight-heading n-">
          Success! You're In.
        </h1>

        <p class="n-typescale-l">Let's get started on something amazing.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100dvh;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: var(--n-space-l);
  padding-block-start:  calc(var(--n-space-l) + var(--navigation-height));
}

.inner {
  margin: auto;
  max-width: 28rem;
  width: 100%;
}
</style>