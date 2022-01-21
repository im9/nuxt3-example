import type { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import pkg from '@prisma/client';
import { Contact } from "@/models/Contact.model";

const { PrismaClient } = pkg;
const prisma = new PrismaClient()

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { firstName, lastName, accountType, company, phone, email, contactMethods, subject, message } = await useBody(req)
  const result = await prisma.contact.create({
    data: {
      firstName,
      lastName,
      accountType,
      company,
      phone,
      email,
      contactMethods,
      subject,
      message,
    } as Contact,
  })
  return result
}
