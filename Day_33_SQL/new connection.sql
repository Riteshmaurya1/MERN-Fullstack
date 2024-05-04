CREATE DATABASE college;
USE college;
CREATE TABLE student (
roll_no INT,
name VARCHAR(30),
age INT
);

/* For inserting data in student table */
INSERT INTO student
VALUES
(101,"RITESH",21),
(102,"UTTAM",20);

/* check any point of data*/
SELECT * FROM student;

/*create queries*/
create database if not exists college;
create database if not exists instagram;

/*drop queries*/
drop database if exists college;

/*show queries*/
show databases;
USE instagram;
show tables;


