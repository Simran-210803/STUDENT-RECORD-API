# Student Record API

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

## **API ROUTES**

| Method     | Endpoint        | Description         |
| ---------- | --------------- | ------------------- |
| **GET**    | `/students`     | Fetch all students  |
| **POST**   | `/students`     | Add a new student   |
| **PUT**    | `/students/:id` | Update student info |
| **DELETE** | `/students/:id` | Delete a student    |

## **Example POST Request (in Postman)**

{
  "name": "Simranpreet Kaur",
  "course": "B.Tech",
  "age": 22,
  "city": "Bhilai"
}

## **Project Structure**

STUDENT-RECORD-API/
│
├── backend/
│   ├── models/
│   │   └── studentModel.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│       ├── components/
│       │   ├── StudentForm.js
│       │   └── StudentList.js
│       ├── App.js
│       └── index.js
│
├── package.json
├── .gitignore
└── README.md

## **Environment Variables**

In your backend folder, create a .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB

## **How to Run the Project**

-Backend

cd backend
npm init -y (creates a package.json file)
npm install
npm run dev

-Frontend

cd frontend
npm init -y (creates a package.json file)
npm install
npm run dev

## ** Frontend Features**

-Simple and clean UI for adding, editing, and deleting students
-Input fields: name, course, age, and city
-Basic validation for name and course

## **How It Works**

-User fills the student form (Name, Course, Age, City).
-The data is sent to the backend API (Express server).
-The server validates inputs and saves the record to MongoDB using Mongoose.
-All records are displayed dynamically on the frontend.
-Users can Edit, Delete, or Add new records in real-time.

## **Technologies Used**

-Node.js
-Express.js
-MongoDB + Mongoose
-React.js (Frontend)
-Postman (for API testing)

---

## **License**

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with proper attribution.  

## **Author**

**Simranpreet Kaur**  
-*Student Record API — Minor Project 1*  
-simranpreet4248@gmail.com    
-[GitHub](https://github.com/Simran-210803)





