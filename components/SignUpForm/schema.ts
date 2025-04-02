import { z } from 'zod'

export const SignUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  newsletterConsent: z.boolean().optional(),
  termsOfServiceConsent: z.boolean().optional(),
})

export type SignUpFormData = z.infer<typeof SignUpFormSchema>