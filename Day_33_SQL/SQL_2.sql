CREATE DATABASE instagram;
USE instagram;

CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age >= 13),
PRIMARY KEY(id)
);

INSERT INTO user 
(id,age,name,email,followers,following)
VALUES
(1,22,"riyash","ritesh@gmail.com",12,0),
(2,21,"sdfghj","hxx@gmail.com",74,74),
(3,41,"ASDC","sdfg@gmail.com",5285,984),
(4,15,"SDF","IYT@gmail.com",741,753),
(5,24,"WERTY","IUYTR@gmail.com",963,951),
(6,32,"QER","JHG@gmail.com",123,987);

-- SELECT * FROM user; /* It is Used for showing the table data*/

-- SELECT *
-- FROM user 


/* ASCENDING SORT BY USER */
-- SELECT *
-- FROM user 
-- ORDER BY age ASC;

/**/
-- SELECT sum(followers)
-- FROM user;

-- SELECT age,max(followers)
-- FROM user
-- GROUP BY age
-- HAVING max(followers) >20;

-- /* Update data*/
-- UPDATE user
-- SET followers = 80
-- WHERE age = 21;

-- SET SQL_SAFE_UPDATES = 0;

-- DELETE FROM user
-- WHERE age = 22;
