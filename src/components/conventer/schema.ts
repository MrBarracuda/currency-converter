import { z } from "zod";

export const formSchema = z.object({
  base: z.object({
    currency: z.string(),
    value: z.string(),
  }),
  target: z.object({
    currency: z.string(),
    value: z.string(),
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
