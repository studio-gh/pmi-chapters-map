CREATE TABLE `site_content` (
	`id` integer PRIMARY KEY NOT NULL,
	`payload` text NOT NULL,
	`updated_at` text NOT NULL,
	`updated_by` text NOT NULL,
	`source_file` text DEFAULT '' NOT NULL
);
