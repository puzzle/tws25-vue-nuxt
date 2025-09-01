import z from "zod";

export const Fruit = z.object({
  id: z.number(),
  name: z.string(),
});

export type Fruit = z.infer<typeof Fruit>;
