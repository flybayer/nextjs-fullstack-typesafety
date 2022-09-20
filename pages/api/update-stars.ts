import { NextApiRequest, NextApiResponse } from "next";

export interface SaveStarsInput {
  numberOfStars: number;
}
async function saveStars(input: SaveStarsInput) {
  const { numberOfStars } = input;
  if (!numberOfStars) return;
  return { success: true, newStars: numberOfStars };
}
export type SaveStarsResult = Awaited<ReturnType<typeof saveStars>>;

export default async function updateStars(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const input = req.body;
  const result = await saveStars(input);
  return res.json(result);
}
