# ✅ QA Todo App - Cypress E2E Tests

This repository contains **end-to-end tests** for a simple Todo web application using **Cypress.io**.



## 📌 Features Tested
✔️ **User Login** – Tests login flow with email & password.  
✔️ **Create Todo** – Ensures a user can add new tasks.  
✔️ **Delete Todo** – Ensures tasks can be removed successfully.  



## 🚀 Setup & Installation

## Clone the repository

-git clone https://github.com/Nedubryan/qa-todo-cypress.git
-cd qa-todo-cypress

## INSTALL DEPENDENCIES
-npm install

## START THE TODO APP
-Make sure your application is running on http://localhost:3000
-npm start

## RUN CYPRESS TESTS
-npx cypress open
-Select the test file and run it in Cypress Test Runner.

## 🧪 Test Scenarios
Test Case	Steps	Expected Result
-Login Test	Enter valid email & password → Click Login	User is redirected to the Todo page
-Add Todo	Enter a new task in the input → Click Add	The task appears in the list
-Delete Todo	Add a task → Click delete button	Task is removed from the list

## 📄 Test Documentation
-Detailed test plan is available in TEST_PLAN.md

## 🛠️ Tech Stack
-Cypress – E2E testing framework
-Node.js + npm

## 📌 Author
👤 Nedubryan
📧 [chineduebokam@gmail.com]


