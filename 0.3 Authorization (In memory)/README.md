# Express Authorization API

This is a simple Express.js API that demonstrates basic user authentication and authorization using in-memory storage. The API provides endpoints for user signup, signin, and retrieving user information.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node index.js
```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. Sign Up
- **Endpoint**: `POST /signup`
- **Description**: Creates a new user account
- **Request Body**:
```json
{
    "username": "your_username",
    "password": "your_password"
}
```
- **Response**:
```json
{
    "message": "You have signed up"
}
```

### 2. Sign In
- **Endpoint**: `POST /signin`
- **Description**: Authenticates a user and returns a token
- **Request Body**:
```json
{
    "username": "your_username",
    "password": "your_password"
}
```
- **Success Response**:
```json
{
    "token": "randomly_generated_token"
}
```
- **Error Response** (403):
```json
{
    "message": "Invalid username or password"
}
```

### 3. Get User Information
- **Endpoint**: `GET /me`
- **Description**: Retrieves information about the authenticated user
- **Headers**:
  - `Authorization`: Your authentication token
- **Success Response**:
```json
{
    "username": "your_username"
}
```
- **Error Response** (401):
```json
{
    "message": "Invalid token"
}
```

## Testing with Postman

### 1. Sign Up
1. Open Postman
2. Create a new POST request to `http://localhost:3000/signup`
3. Go to the "Body" tab
4. Select "raw" and "JSON"
5. Enter the request body:
```json
{
    "username": "testuser",
    "password": "testpass"
}
```
6. Click "Send"
7. You should receive a success message

### 2. Sign In
1. Create a new POST request to `http://localhost:3000/signin`
2. Go to the "Body" tab
3. Select "raw" and "JSON"
4. Enter the same credentials you used for signup:
```json
{
    "username": "testuser",
    "password": "testpass"
}
```
5. Click "Send"
6. You'll receive a token in the response - save this token for the next request

### 3. Get User Information
1. Create a new GET request to `http://localhost:3000/me`
2. Go to the "Headers" tab
3. Add a new header:
   - Key: `Authorization`
   - Value: The token you received from the signin request
4. Click "Send"
5. You should receive your username in the response

## Important Notes

- This is a simple demonstration using in-memory storage. All data will be lost when the server restarts.
- The token is randomly generated and stored with the user object in memory.
