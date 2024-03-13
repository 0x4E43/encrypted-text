-- CreateTable
CREATE TABLE "Sites" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" STRING NOT NULL,
    "category" STRING NOT NULL,
    "title" STRING NOT NULL,
    "content" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" STRING NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sites_name_key" ON "Sites"("name");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
