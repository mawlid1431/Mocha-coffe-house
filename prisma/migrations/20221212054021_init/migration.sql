-- CreateTable
CREATE TABLE `MEnu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `discount` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
