<script lang="ts" setup>
import type { SignUpFormData } from '~/components/SignUpForm/schema'

useSeoMeta({
  title: 'Create an account',
  description: 'Create an account to get started with our services.',
})

const pending = ref(false)

async function onSubmit(formData: SignUpFormData) {
  pending.value = true

  // Simulate a network request
  const postRequest = new Promise(resolve => setTimeout(resolve, 1500))

  await postRequest.then(() => {
    pending.value = false

    // eslint-disable-next-line no-console
    console.debug('Form submitted:', formData)

    navigateTo('/signup/success')
  }).catch((error: unknown) => {
    pending.value = false

    throw createError({
      statusText: error instanceof Error ? error.message : 'Internal Server Error',
    })
  })
}
</script>

<template>
  <div class="container n-grid n-color-surface-raised">
    <main>
      <SignUpForm
        class="signup-form"
        :pending="pending"
        @submit="onSubmit"
      />
    </main>

    <aside>
      <picture class="n-background-surface">
        <source media="(min-width: 1200px)" srcset="/assets/happy-dog@2x.jpg 2x, /assets/happy-dog.jpg 1x">
        <source media="(max-width: 1199px)" srcset="/assets/happy-dog@2x.jpg 1x, /assets/happy-dog.jpg 1x">
        <img src="/assets/happy-dog.jpg" alt="Image Description">
      </picture>
    </aside>
  </div>
</template>

<style scoped>
main {
  padding: var(--n-space-m);
  padding-block-start: calc(var(--n-space-xl) + var(--landing-page-top-bar-height));
  grid-column: span 12;
  display: flex;
  flex-direction: column;
}

.signup-form {
  max-width: 23rem;
  margin: auto;
}

aside {
  display: none;
}

.container {
  min-height: 100dvh;
}

@media screen and (min-width: 1200px) {
  aside {
    display: block;
    position: relative;
  }

  aside picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  aside picture img {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    object-fit: cover;
    opacity: 0;
    animation: fade-in 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-fill-mode: forwards;
  }

  aside,
  main {
    padding: var(--n-space-xxl);
    padding-block-start: calc(var(--n-space-xxl) + var(--landing-page-top-bar-height));
    grid-column: span 12;
    min-height: 100%;
  }

  main {
    grid-column: span 5;
  }

  aside {
    grid-column: span 7;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    scale: 1.08;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}
</style>
