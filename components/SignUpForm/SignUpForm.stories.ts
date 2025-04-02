// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import SignUpForm from './SignUpForm.vue'

type Story = StoryObj<typeof SignUpForm>

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  title: 'SignUpForm',
  args: {
    pending: false,
    onSubmit: fn(),
  },
}

export const EmptyForm: Story = {
  args: {},
}

export const FilledForm: Story = {
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const email = 'example@provider.com'
    const password = 'a-random-password'

    const getInput = (testId: string) => {
      const element = canvas.getByTestId(testId).shadowRoot?.querySelector('input')
      if (!element)
        throw new Error(`${testId} not found`)
      return element
    }

    const emailInput = getInput('email-input')
    const passwordInput = getInput('password-input')
    const newsletterConsentInput = getInput('newsletter-consent-checkbox')
    const termsOfServiceConsentInput = getInput('terms-of-service-consent-checkbox')
    const submitButton = canvas.getByTestId('submit-button').shadowRoot?.querySelector('button')

    await step('Verify form elements are rendered', async () => {
      await expect(emailInput).toBeInTheDocument()
      await expect(passwordInput).toBeInTheDocument()
      await expect(newsletterConsentInput).toBeInTheDocument()
      await expect(termsOfServiceConsentInput).toBeInTheDocument()
      await expect(submitButton).toBeInTheDocument()
    })

    await step('Fill out the form fields', async () => {
      await userEvent.type(emailInput, email)
      await userEvent.type(passwordInput, password)
      await userEvent.click(newsletterConsentInput)
      await userEvent.click(termsOfServiceConsentInput)

      await expect(emailInput).toHaveValue(email)
      await expect(passwordInput).toHaveValue(password)
      await expect(newsletterConsentInput).toBeChecked()
      await expect(termsOfServiceConsentInput).toBeChecked()
    })

    await step('Verify submit button is enabled', async () => {
      await expect(submitButton).toBeEnabled()
    })

    await step('Submit the completed form', async () => {
      await userEvent.click(submitButton!)
      await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
    })
  },
}

export const InvalidForm: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const email = 'invalid-email'
    const password = '123'

    const emailInput = canvas.getByTestId('email-input').shadowRoot?.querySelector('input')
    const passwordInput = canvas.getByTestId('password-input').shadowRoot?.querySelector('input')
    const termsOfServiceConsentInput = canvas.getByTestId('terms-of-service-consent-checkbox').shadowRoot?.querySelector('input')
    const submitButton = canvas.getByTestId('submit-button').shadowRoot?.querySelector('button')

    const getInputError = (testId: string) => {
      const element = canvas.getByTestId(testId).shadowRoot?.querySelector('#error')
      if (!element)
        throw new Error(`${testId} error not found`)
      return element
    }

    await step('Enter invalid email and short password', async () => {
      await userEvent.type(emailInput!, email)
      await userEvent.type(passwordInput!, password)
      await userEvent.click(termsOfServiceConsentInput!)
    })

    await step('Attempt to submit the form', async () => {
      await userEvent.click(submitButton!)
    })

    await step('Validate error messages for invalid input', async () => {
      await expect(emailInput).toHaveAttribute('aria-invalid', 'true')
      await expect(passwordInput).toHaveAttribute('aria-invalid', 'true')
      const emailError = getInputError('email-input')
      const passwordError = getInputError('password-input')
      await expect(emailError).toBeInTheDocument()
      await expect(passwordError).toBeInTheDocument()
    })
  },
}

export const PendingForm: Story = {
  args: { pending: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const submitButton = canvas.getByTestId('submit-button').shadowRoot?.querySelector('button')
    await step('Ensure submit button is disabled while form is pending', async () => {
      await expect(submitButton).toBeDisabled()
    })
  },
}

export const ConsentRequiredForm: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const email = 'user@example.com'
    const password = 'securePassword123'

    const emailInput = canvas.getByTestId('email-input').shadowRoot?.querySelector('input')
    const passwordInput = canvas.getByTestId('password-input').shadowRoot?.querySelector('input')
    const submitButton = canvas.getByTestId('submit-button').shadowRoot?.querySelector('button')

    await step('Fill out the form except consents', async () => {
      await userEvent.type(emailInput!, email)
      await userEvent.type(passwordInput!, password)
    })

    await step('Verify submit button remains disabled', async () => {
      await expect(submitButton).toBeDisabled()
    })
  },
}

export const ShownPassword: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const passwordInput = canvas.getByTestId('password-input').shadowRoot?.querySelector('input')
    const showPasswordButton = canvas.getByTestId('show-password')

    await step('Enter a password', async () => {
      await userEvent.type(passwordInput!, 'password123')
    })

    await step('Click show password button', async () => {
      await userEvent.click(showPasswordButton!)
      await expect(passwordInput).toHaveAttribute('type', 'text')
    })

    await step('Click show password button again to hide password', async () => {
      await userEvent.click(showPasswordButton!)
      await expect(passwordInput).toHaveAttribute('type', 'password')
    })
  },
}

export default meta
