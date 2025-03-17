# userApi


![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express](https://img.shields.io/badge/Express-v4.x-blue)


This is a RESTful API for managing users. It supports CRUD operations.

---

## Table of Contents
1. [Setup Instructions](#setup-instructions)
2. [API Endpoints](#api-endpoints)
3. [Sample Requests/Responses](#sample-requestsresponses)
4. [Contributing](#contributing)

---

## Setup Instructions

### Prerequisites
- Node.js installed


### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mk1589/userApi
   cd userApi
   npm install
   npm start

2. API Endpoints

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | /api/users       | Create a new user            |
| GET    | /api/users       | Retrieve all users           |
| GET    | /api/users/:id   | Retrieve a single user by ID |
| PUT    | /api/users/:id   | Update a user by ID          |
| DELETE | /api/users/:id   | Delete a user by ID          |

3. Sample Requests/Responses
- Create a User
     Request:
     ```bash
     {
       "name": "Radha",
       "email": "Radha@example.com",
       "age": 30
     }

4. Contributing:
- Fork the repository
- Create a new branch:
  ```bash
     git checkout -b feature/your-feature-name
- Commit your changes:
  ``` bash
      git commit -m "Add your message here"
- Push to the branch:
  ``` bash
      git push origin feature/your-feature-name

