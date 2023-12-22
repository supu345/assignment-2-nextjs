/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `course` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_studentID_fkey`;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `course` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `course`;
