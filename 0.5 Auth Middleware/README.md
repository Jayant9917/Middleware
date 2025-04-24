# Authentication Middleware Project

This is a simple Express.js application that demonstrates user authentication using JWT (JSON Web Tokens) and middleware implementation.

## Features

- User Signup
- User Signin with JWT authentication
- Protected routes using middleware
- User information retrieval
- Secure token-based authentication
- Clean and responsive UI

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - JWT (JSON Web Tokens)
  - Express Middleware

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - Axios for API calls
  - Local Storage for token management

## Project Structure

```
.
├── index.js           # Main server file
├── public/
│   └── index.html     # Frontend interface
└── README.md          # Project documentation
```

## API Endpoints

1. **POST /signup**
   - Creates a new user account
   - Request body: `{ username, password }`

2. **POST /signin**
   - Authenticates user and returns JWT token
   - Request body: `{ username, password }`

3. **GET /me**
   - Protected route that returns user information
   - Requires JWT token in headers

## Middleware Implementation

1. **Logger Middleware**
   - Logs HTTP method and request information
   - Applied to all routes

2. **Auth Middleware**
   - Verifies JWT tokens
   - Protects sensitive routes
   - Handles unauthorized access

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. Access the application at `http://localhost:3000`

## Security Features

- JWT-based authentication
- Token-based session management
- Protected routes
- Secure password handling
- Token verification middleware

## Usage

1. **Sign Up:**
   - Enter username and password
   - Click "Submit" to create account

2. **Sign In:**
   - Enter credentials
   - Receive JWT token upon successful authentication

3. **View User Information:**
   - Automatically displays after successful signin
   - Protected by authentication middleware

4. **Logout:**
   - Removes JWT token from local storage
   - Ends user session

## Notes

- The application uses a simple in-memory user storage
- JWT tokens are stored in local storage for session management
- All sensitive routes are protected by authentication middleware
- The frontend provides a clean and intuitive user interface

## Future Improvements

- Database integration for persistent user storage
- Password hashing
- Session management
- Email verification
- Password reset functionality
- Role-based access control 