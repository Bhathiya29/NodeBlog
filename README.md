# Node.js Blog with Express and MVC Architecture

This application is built using Express.js and follows the Model-View-Controller (MVC) architectural pattern, providing a structured approach to developing web applications in Node.js.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MVC Architecture**: Separation of concerns for cleaner codebase and easier maintenance.
- **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- **Middleware**: Custom middleware for logging, error handling.
- **Responsive Design**: UI/UX optimized for various devices and screen sizes.

## Requirements

- Node.js (v12 or higher)
- npm (or yarn)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nodejs-blog.git
   cd nodejs-blog
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environment variables:**

   Create a `.env` file in the root directory and add:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blog
   SESSION_SECRET=your_session_secret
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   Or, for development with nodemon:

   ```bash
   npm run dev
   ```

5. **Open your browser:**

   Navigate to `http://localhost:3000` to view the application.


