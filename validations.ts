import { z } from "zod";

export const SaveDurationInput = z.object({
  duration: z.string().min(1),
});
export type SaveDurationInput = z.infer<typeof SaveDurationInput>;
