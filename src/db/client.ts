// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../../prisma/generated/postgres_client";

const prisma = new PrismaClient();

export default prisma;