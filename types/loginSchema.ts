import {z} from 'zod'


export const LoginSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
  secondName: z.string().min(2, "Second name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
})


export type TLoginSchema = z.infer<typeof LoginSchema>