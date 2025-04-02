<script lang="ts" setup>
import type { Checkbox } from '@provetcloud/web-components'
import type { SignUpFormData } from './schema'
import { defineEmits, ref } from 'vue'
import { ZodError } from 'zod'
import { SignUpFormSchema } from './schema'

defineProps<{ pending?: boolean }>()

const emit = defineEmits(['submit'])

const showPassword = ref(false)

const formData = ref<SignUpFormData>({
  email: '',
  password: '',
  newsletterConsent: false,
  termsOfServiceConsent: false,
})

const errors = ref<Record<string, string | undefined>>({})

function clearErrors() {
  errors.value = {}
}

function onSubmit() {
  clearErrors()
  const { success, error, data } = SignUpFormSchema.safeParse(formData.value)

  if (success) {
    // Handle successful form submission
    emit('submit', data)
    return
  }

  if (error instanceof ZodError) {
    // Handle validation errors
    error.errors.forEach((err) => {
      const path = err.path[0]
      const message = err.message
      errors.value[path] = message
    })
  }
}

/**
 * Note:
 *
 * These methods are necessary because the v-model directive
 * does not work with web components in the context of Storybook.
 *
 * The issue must be investgated further.
 *
 * Or we could use utility functions to better manage these events
 * and encapsulate the logic in a composable, we are keeping it simple for now.
 */

function onMarketingEmailsChange(event: Event) {
  const target = event.target as Checkbox
  formData.value.newsletterConsent = target.checked
}

function onTermsOfServiceChange(event: Event) {
  const target = event.target as Checkbox
  formData.value.termsOfServiceConsent = target.checked
}

function onPasswordChange(event: Event) {
  const target = event.target as HTMLInputElement
  formData.value.password = target.value
}

function onEmailChange(event: Event) {
  const target = event.target as HTMLInputElement
  formData.value.email = target.value
}
</script>

<template>
  <provet-stack gap="xl" class="sign-up-form">
    <provet-stack gap="s">
      <h1 class="n-typescale-xxl n-text-bold n-font-weight-heading">
        Get Started
      </h1>
      <p class="n-color-text-weaker">
        Create a new account
      </p>
    </provet-stack>

    <form id="auth-form" class="n-stack" @submit.prevent="onSubmit">
      <provet-stack gap="l">
        <provet-input
          id="email"
          expand
          required
          label="Email"
          type="email"
          form="auth-form"
          data-testid="email-input"
          :error="errors.email"
          :value="formData.email"
          @input="onEmailChange"
        >
          <provet-icon slot="start" name="interface-email" />
        </provet-input>

        <provet-input
          id="password"
          :error="errors.password"
          label="Password"
          form="auth-form"
          required
          expand
          hint="Must be at least 8 characters"
          data-testid="password-input"
          :value="formData.password"
          :type="showPassword ? 'text' : 'password'"
          @input="onPasswordChange"
        >
          <provet-icon slot="start" name="interface-lock" />

          <button
            slot="end"
            type="button"
            data-testid="show-password"
            class="show-password-button n-text-weak"
            @click.prevent="showPassword = !showPassword"
          >
            <provet-icon size="s" :name="showPassword ? 'interface-edit' : 'interface-edit-off'" />
          </button>
        </provet-input>

        <provet-stack gap="s">
          <provet-checkbox
            id="marketing-emails"
            expand
            form="auth-form"
            :checked="formData.newsletterConsent"
            data-testid="newsletter-consent-checkbox"
            label="I want to receive occasional product updates and announcements"
            @change="onMarketingEmailsChange"
          />

          <provet-checkbox
            id="terms-of-service"
            expand
            required
            form="auth-form"
            label="I agree to the Terms of Service"
            :error="errors.termsOfServiceConsent"
            :checked="formData.termsOfServiceConsent"
            data-testid="terms-of-service-consent-checkbox"
            @change="onTermsOfServiceChange"
          />
        </provet-stack>

        <provet-button
          expand
          size="l"
          type="submit"
          variant="primary"
          data-testid="submit-button"
          :disabled="pending || !formData.termsOfServiceConsent"
          :loading="pending"
        >
          Sign Up
        </provet-button>
      </provet-stack>
    </form>
  </provet-stack>
</template>

<style scoped>
.sign-up-form {
  max-width: 23rem;
  margin: 0 auto;
}

.provet-input {
  width: 100%;
}

.show-password-button {
  display: flex;
  pointer-events: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
