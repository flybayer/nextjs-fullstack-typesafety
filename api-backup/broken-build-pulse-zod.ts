import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { SaveDurationInput } from "../../validations";

async function saveDuration(rawInput: SaveDurationInput) {
  const input = SaveDurationInput.parse(rawInput);

  const { duration } = input;
  // save in DB
  return { success: true, newDuration: duration };
}
export type SaveDurationResult = Awaited<ReturnType<typeof saveDuration>>;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const result = await saveDuration(req.body);
  res.send(result);
}
