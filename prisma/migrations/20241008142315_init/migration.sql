-- CreateTable
CREATE TABLE "UserCred" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserCred_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCred_mail_key" ON "UserCred"("mail");
