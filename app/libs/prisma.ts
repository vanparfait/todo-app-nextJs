import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   prisma = new PrismaClient();
// }

// export { prisma };
