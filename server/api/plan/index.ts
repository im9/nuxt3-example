import type { IncomingMessage, ServerResponse } from 'http'
import pkg from '@prisma/client';
import { Plan } from "@/models/Plan.model";

const { PrismaClient } = pkg;
const prisma = new PrismaClient()

export default async (req: IncomingMessage, res: ServerResponse) => {
  const allPlans: Plan[] = await prisma.plan.findMany()
  return allPlans
}
