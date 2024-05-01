/*
  Warnings:

  - Added the required column `sinopsis` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "sinopsis" VARCHAR(255) NOT NULL;
