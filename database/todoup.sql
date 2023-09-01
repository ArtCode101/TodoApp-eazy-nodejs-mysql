CREATE TABLE `todos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `topic` varchar(255) NOT NULL,
  `message` text DEFAULT null,
  `status` boolean NOT NULL DEFAULT (false),
  `timestamp` timestamp NOT NULL DEFAULT (now())
);

CREATE UNIQUE INDEX `todo_index_0` ON `todos` (`id`, `topic`);
