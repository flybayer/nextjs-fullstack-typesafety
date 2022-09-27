import { NextApiRequest, NextApiResponse } from "next";
import { SaveStarsInput, SaveStarsInputType } from "../../validations";

async function saveStars(input: SaveStarsInputType) {
  const { numberOfStars } = SaveStarsInput.parse(input);

  // Save in DB
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
