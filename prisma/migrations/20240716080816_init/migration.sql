-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
