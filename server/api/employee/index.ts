import type { IncomingMessage, ServerResponse } from 'http'
import pkg from '@prisma/client';
import { Employee } from "@/models/Employee.model";

const { PrismaClient } = pkg;
const prisma = new PrismaClient()

export default async (req: IncomingMessage, res: ServerResponse) => {
  const allEmployees: Employee[] = await prisma.employee.findMany()
  return allEmployees
}
