import z from "zod";


export const searchSchema = z.object({
  query: z.string().min(3, "please make sure search for valid name")
})

export  type TSearchSchema = z.infer<typeof searchSchema>