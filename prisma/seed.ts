import { Contact } from "@/models/Contact.model";
import { Plan } from "@/models/Plan.model";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const transfer = async ()  => {
  // Contact
  const contacts = [...Array(10)].map((_, index) => {
    return prisma.contact.create({
      data: {
        firstName: `名${index}`,
        lastName: `姓${index}`,
        accountType: 1,
        company: "部署",
        phone: "090-1111-2222",
        email: `test${index}@example.com`,
        contactMethods: [1, 2],
        subject: "件名",
        message: "メッセージ",
      } as Contact,
    });
  })
  await prisma.$transaction(contacts);

  // Plan
  const plans = [
    {
      name: "Free",
      price: 0,
      services: [
        "1.000 MB file storage",
        "2.000 MB bandwidth per month",
        "200 tasks per month",
        "Comunity support",
      ],
    },
    {
      name: "Team",
      price: 19,
      services: [
        "Unlimited file storage",
        "10 GB bandwidth per month",
        "10.000 tasks per month",
        "Email support",
        "100 Webhooks",
      ],
    },
    {
      name: "Enterprise",
      price: 49,
      services: [
        "Unlimited file storage",
        "Unlimited bandwidth per month",
        "1.000.000 tasks per month",
        "Email and phone supportt",
        "Unlimited Webhooks",
      ],
    },
  ].map((data) => {
    return prisma.plan.create({
      data,
    });
  })

  await prisma.$transaction(plans);

  return
}

const main = async () => {
  console.log('Prisma seeding ...');

  await transfer();

  console.log('Prisma seeded.');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

