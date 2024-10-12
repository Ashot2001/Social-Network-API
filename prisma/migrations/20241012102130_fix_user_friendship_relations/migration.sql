/*
  Warnings:

  - You are about to drop the column `friendId` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the `FriendRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user1Id` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user2Id` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "FriendRequest" DROP CONSTRAINT "FriendRequest_senderId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_friendId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_userId_fkey";

-- AlterTable
ALTER TABLE "Friendship" DROP COLUMN "friendId",
DROP COLUMN "userId",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "user1Id" INTEGER NOT NULL,
ADD COLUMN     "user2Id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "FriendRequest";

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
