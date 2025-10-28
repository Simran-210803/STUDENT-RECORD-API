# Student Record API
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


This project is a **Minor Project 1 — Express + MongoDB**, built to create and manage student records using a RESTful API.  
It connects **Express.js** with **MongoDB** via **Mongoose** and allows full CRUD operations with basic field validation.

---

## Goal

Create an API to manage student data with Express and MongoDB.

---

## Requirements

- Connect Express with MongoDB using Mongoose  
- Schema includes: **name**, **course**, **age**, **city**  
- Routes for all CRUD operations  
- Add basic validation for name and course  
- Test all routes in Postman  

---

## Schema Structure

```js
{
  name: String,
  course: String,
  age: Number,
  city: String
}
```
---

## API ROUTES

| Method     | Endpoint        | Description         |
| ---------- | --------------- | ------------------- |
| **GET**    | `/students`     | Fetch all students  |
| **POST**   | `/students`     | Add a new student   |
| **PUT**    | `/students/:id` | Update student info |
| **DELETE** | `/students/:id` | Delete a student    |

---

## Example POST Request (in Postman)
```
{
  "name": "Simranpreet Kaur",
  "course": "B.Tech",
  "age": 22,
  "city": "Bhilai"
}
```

---

## Project Structure
```
STUDENT-RECORD-API/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── student.js
│   │   ├── routes/
│   │   │   └── studentRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.js
│   │   │   └── StudentList.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── LICENSE
└── README.md

```
---

## Environment Variables

In your backend folder, create a .env file:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```
---

## How to Run the Project

- Backend
```
cd backend
npm init -y  #creates a package.json file
npm install
npm run dev
```
- Frontend
```
cd frontend
npm init -y  #creates a package.json file
npm install
npm run dev
```
---

## Frontend Features

- Simple and clean UI for adding, editing, and deleting students
- Input fields: name, course, age, and city
- Basic validation for name and course

---

## How It Works

1. User fills the student form (Name, Course, Age, City).
2. The data is sent to the backend API (Express server).
3. The server validates inputs and saves the record to MongoDB using Mongoose.
4. All records are displayed dynamically on the frontend.
5. Users can Edit, Delete, or Add new records in real-time.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- React.js (Frontend)
- Postman (for API testing)

---

## **License**

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with proper attribution.  

---

## **Author**

**Simranpreet Kaur**  
- *Student Record API — Minor Project 1*  
- simranpreet4248@gmail.com    
- [GitHub](https://github.com/Simran-210803)





