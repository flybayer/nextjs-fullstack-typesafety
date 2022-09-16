import { NextApiRequest, NextApiResponse } from "next";

export interface SaveDurationInput {
  duration: string;
}
async function saveDuration(input: SaveDurationInput) {
  if (typeof input !== "object") throw new Error("input must be an object");
  if (!("duration" in input))
    throw new Error("input object must have `duration` key");
  if (typeof input.duration !== "string")
    throw new Error("duration must be a string");
  if (!input.duration) throw new Error("duration cannot be an empty string");

  const { duration } = input;
  // save in DB
  return { success: true, newDuration: duration };
}
export type SaveDurationResult = Awaited<ReturnType<typeof saveDuration>>;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const result = await saveDuration(req.body);
  res.send(result);
}
