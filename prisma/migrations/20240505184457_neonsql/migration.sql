/*
  Warnings:

  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(6000)` to `VarChar(255)`.
  - You are about to drop the `Actors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikeMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActorsToMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikeMovies" DROP CONSTRAINT "LikeMovies_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "LikeMovies" DROP CONSTRAINT "LikeMovies_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ActorsToMovies" DROP CONSTRAINT "_ActorsToMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActorsToMovies" DROP CONSTRAINT "_ActorsToMovies_B_fkey";

-- AlterTable
ALTER TABLE "Movies" ALTER COLUMN "sinopsis" SET DATA TYPE VARCHAR(1000);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "Actors";

-- DropTable
DROP TABLE "LikeMovies";

-- DropTable
DROP TABLE "_ActorsToMovies";
