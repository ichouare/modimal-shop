import {z} from 'zod'


export const SignUpSchema = z.object({
  email: z.string().email("invalid email"),
  password:z.string().min(6, "Password must be at least 6 characters")
})


export type TSignUpSchema = z.infer<typeof SignUpSchema>