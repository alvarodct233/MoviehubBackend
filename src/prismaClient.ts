import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { PrismaClient as MongoPrismaClient } from "../prisma/generated/mongo_client";
import { PrismaClient as PostgresPrismaClient } from "../prisma/generated/postgres_client";

export const DATA_SOURCE = process.env.DATA_SOURCE ?? "mongo"
        
type ClientMongo = MongoPrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
type ClientPostgres = PostgresPrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient = new MongoPrismaClient();
export const postgresClient = new PostgresPrismaClient();

export let prismaClient: ClientPostgres | ClientMongo;

if (DATA_SOURCE === "postgres") {
        prismaClient = postgresClient;
} else {
        prismaClient = mongoClient;
}