<script lang="ts" setup>
import type { SignUpFormData } from '~/components/SignUpForm/schema'

definePageMeta({
  name: 'Sign Up',
  title: 'Create an account',
})

const pending = ref(false)

async function onSubmit(formData: SignUpFormData) {
  pending.value = true

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Handle successful form submission
  pending.value = false

  // Here you would typically send the form data to your server
  // eslint-disable-next-line no-console
  console.debug('Form submitted:', formData)

  navigateTo('/signup/success')
}
</script>

<template>
  <div class="container n-grid">
    <main>
      <SignUpForm :pending="pending" class="signup-form" @submit="onSubmit" />

      <p class="n-align-center n-color-text-weaker n-typescale-s n-margin-bs-l">
        By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
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
  grid-column: span 12;
  display: flex;
  flex-direction: column;
}

.signup-form {
  width: 100%;
  margin: auto;
}

aside {
  display: none;
}

main {
  padding-top: calc(var(--n-space-xl) + var(--navigation-height));
}

@media screen and (min-width: 1200px) {
  .container {
    min-height: 100dvh;
  }

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
    padding-top: calc(var(--n-space-xxl) + var(--navigation-height));
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
