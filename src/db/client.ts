// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../../prisma/generated/mongo_client";

const prisma = new PrismaClient();

export default prisma;