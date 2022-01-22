import { Contact } from "@/models/Contact.model";
import { Plan } from "@/models/Plan.model";
import { Position } from "@/models/Position.model";
import { Employee } from "@/models/Employee.model";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// Contact Form Data for Debug
const defaultContact = (index: number): Contact => {
  return {
    firstName: `名${index}`,
    lastName: `姓${index}`,
    accountType: 1,
    company: "部署",
    phone: "090-1111-2222",
    email: `test${index}@example.com`,
    contactMethods: [1, 2],
    subject: "件名",
    message: "メッセージ",
  }
}

// Master Plan Data
const masterPlans: Plan[] = [
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
  }
]

// Master Position Data
const masterPositions: Position[] = [
  {
    positionName: "Founder",
  },
  {
    positionName: "CEO",
  },
  {
    positionName: "CFO",
  },
  {
    positionName: "CTO",
  },
  {
    positionName: "Creative Director",
  },
  {
    positionName: "Investor Relations",
  },
  {
    positionName: "Senior Art Director",
  },
  {
    positionName: "Creative Director",
  },
  {
    positionName: "Marketing Analyst",
  },
]

// Master Employee Data
const masterEmployees: Employee[] = [
  {
    firstName: "John",
    lastName: "McCulling",
    // positions: [], // Founder / CEO
    imgUrl: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Kate",
    lastName: "Berg",
    // positions: [], // CFO
    imgUrl: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Kate",
    lastName: "Berg",
    // positions: [], // CTO
    imgUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Robert",
    lastName: "Greyson",
    // positions: [], // Creative Director
    imgUrl: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "John",
    lastName: "Roberts",
    // positions: [], // Investor Relations
    imgUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Judy",
    lastName: "Amandez",
    // positions: [], // Senior Art Director
    imgUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Rahul",
    lastName: "Williams",
    // positions: [], // Creative Director
    imgUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
  {
    firstName: "Ari",
    lastName: "Ferris",
    // positions: [], // Marketing Analyst
    imgUrl: "https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256",
    instagramUrl: "#",
    twitterUrl: "#",
  },
]

const transfer = async ()  => {
  // Contact
  const contacts = [...Array(10)].map((_, index) => {
    return prisma.contact.create({
      data: defaultContact(index),
    });
  })
  await prisma.$transaction(contacts);

  // Master Plan
  const plans = masterPlans.map((data: Plan) => {
    return prisma.plan.create({
      data,
    });
  })
  await prisma.$transaction(plans);

  // Master Position
  const positions = masterPositions.map((data: Position) => {
    return prisma.position.create({
      data,
    });
  })
  await prisma.$transaction(positions);

  // Master Employees
  const employees = masterEmployees.map((data: Employee) => {
    return prisma.employee.create({
      data,
    });
  })
  await prisma.$transaction(employees);

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
