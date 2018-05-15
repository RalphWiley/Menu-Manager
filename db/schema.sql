CREATE DATABASE IF NOT EXISTS UserMenus_db;
USE UserMenus_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS menu;

-- Create the menus table
CREATE TABLE UserMenus (
    id int NOT NULL AUTO_INCREMENT,
    menu_name varchar(255) NOT NULL,
    userid int NOT NULL, 
    PRIMARY KEY (id)
);
