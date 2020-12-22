USE `shoping_cart_test`;

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `cart_products` (
    `userId` int(11) NOT NULL,
    `productId` int(11) NOT NULL,
    `amount` int(11) NOT NULL,
    CONSTRAINT `cart_products_users_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) DEFAULT CHARSET=utf8;
