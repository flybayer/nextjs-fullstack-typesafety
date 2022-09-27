import { z } from "zod";
export const SaveStarsInput = z.object({ numberOfStars: z.number().min(0) });
export type SaveStarsInputType = z.infer<typeof SaveStarsInput>;
