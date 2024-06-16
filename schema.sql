-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

CREATE DATABASE IF NOT EXISTS cowlist;

USE cowlist;

DROP TABLE IF EXISTS `cows`;

CREATE TABLE `cows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
);