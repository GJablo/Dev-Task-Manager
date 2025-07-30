 # Dev Task Manager

 A full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js). It's designed for Newbies, featuring user authentication and role-based access control.

 ## Features

 - **User Authentication**: Secure sign-up and login functionality using JWT (JSON Web Tokens).
 - **Role-Based Access Control**:
   - **User/Developer**: Can create, view, update, and delete their own tasks.
   - **Admin**: Can view all tasks in the system.
 - **Task Management**: Full CRUD (Create, Read, Update, Delete) operations for tasks.
 - **RESTful API**: A well-structured backend API for handling data.
 - **Modern Frontend**: A responsive and user-friendly interface built with React, Vite, and Tailwind CSS.

 ## Tech Stack

 - **Frontend**:
   - [React](https://reactjs.org/)
   - [Vite](https://vitejs.dev/)
   - [Tailwind CSS](https://tailwindcss.com/)
   - [Axios](https://axios-http.com/) (for API requests)
 - **Backend**:
   - [Node.js](https://nodejs.org/)
   - [Express](https://expressjs.com/)
   - [MongoDB](https://www.mongodb.com/)
   - [Mongoose](https://mongoosejs.com/)
 - **Authentication**:
   - [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) (for password hashing)
   - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) (for JWTs)

 ## Project Structure

 The project is organized into two main directories:

 ```
 /
 ├── client/  # React Frontend
 └── server/  # Node.js/Express Backend
 ```

 ## Prerequisites

 - [Node.js](https://nodejs.org/en/download/) (v16.x or higher)
 - [pnpm](https://pnpm.io/installation) (or npm/yarn)
 - [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-based like MongoDB Atlas)

 ## Getting Started

 Follow these instructions to get the project up and running on your local machine.

 1.  **Clone the repository:**
     ```bash
     git clone https://github.com/GJablo/Dev-Task-Manager.git
     cd Dev-Task-Manager
     ```

 2.  **Set up the Backend:**
     ```bash
     cd server
     pnpm install
     ```
     Create a `.env` file in the `/server` directory and add the following environment variables. You can use the `.env.example` file as a template.

     ```env
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     ```

     Start the backend server:
     ```bash
     pnpm run dev # This will start the server with nodemon
     ```
     The server will be running on `http://localhost:5000` (or your configured port).

 3.  **Set up the Frontend:**
     Open a new terminal window.
     ```bash
     cd client
     npm install
     npm run dev
     ```
     The React application will be running on `http://localhost:5173` (or the port specified by Vite).

 ## API Endpoints

 The backend exposes the following REST API endpoints:

 ### Auth

 - `POST /api/auth/register`: Register a new user.
 - `POST /api/auth/login`: Log in an existing user.

 ### Tasks

 - `POST /api/tasks`: Create a new task (requires authentication).
 - `GET /api/tasks/me`: Get all tasks for the logged-in user (requires authentication).
 - `GET /api/tasks/all`: Get all tasks in the system (Admin only).
 - `PUT /api/tasks/:id`: Update a specific task (Admin or task owner).
 - `DELETE /api/tasks/:id`: Delete a specific task (Admin or task owner).
