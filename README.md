# emarket
 [Demo]()

### Problem Statement:
 shopping from a supermarket in the rush hours where you cant find a parking or where you have to wait too much to get your turn to be served.From this we came up with an idea to build our application.

### What Does Our Project Do ?
 It is an online shopping website for a supermarket.It allows you to view their products and search for what you need. It also allows you to add the products you want to your cart and then order them by filling your contact information.
 note: payment is manually when you get the order ,there is no online payment system integrated with the website.

### Install Instructions:
   - clone the repository [$git clone (repoUrl)]
   - install the dependecies by using this command [$npm i] this command needed in the server and the client folders
   - make a new file at the root level and name it [config.env]
   - make a local database :
     - [$psql]
     - [$create database (dbName);]
     - [$create user (useName) with password 'userPassword';]
     - [$grant all privileges on database (dbName) to (useName);]
     - build the database sql file [ \i (.../db_build.sql)]
     - build the testing data file [ \i (.../init_value.sql)]
   - create a variable in config.env called DATABASE_URL and give it the local database url as the following:
      DATABASE_URL = postgres://(useName):(userPassword)@localhost:5432/(dbName)
   - run the project by [$npm run dev:all] at the server level and [$npm start] at the client level


### Team Members:
 - (Someya)[https://github.com/someyaaltous]
 - (Munir)[https://github.com/Muniralsharif]
 - (Yousef)[https://github.com/YousefQwasmeh]
