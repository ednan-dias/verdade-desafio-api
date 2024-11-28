-- CreateEnum
CREATE TYPE "Type" AS ENUM ('TRUTH', 'CHALLENGE');

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'TRUTH',
    "message" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
