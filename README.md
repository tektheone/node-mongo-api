# Node.js API with MongoDB

This is a simple Express API that connects to a MongoDB database and retrieves user data.

## Features:
- Retrieves user data by ID
- Onlyu returns users older than 21
- Gracefully handles invalid ObjectId errors
- Returns 404 if the user is not found

## Installation
1. Clone the repository
2. Run `npm install`
3. Set up a `.env` file with your MongoDB URI
4. Start the server with `npm start`

## Endpoints
- `GET /api/users/:id` - Fetch user detail