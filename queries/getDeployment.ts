import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const GetDeploymentInput = z.object({ id: z.number() });
type GetDeploymentInput = z.infer<typeof GetDeploymentInput>;

export default async function getDeployment(rawInput: GetDeploymentInput) {
  const input = GetDeploymentInput.parse(rawInput);
  const deployment = await prisma.deployment.findFirst({
    where: { id: input.id },
  });
  return deployment;
}
