# Social Media API 
This repository contains a simple social media API built with Node.js, Express, and MySQL. The API supports basic user management, post management, and comment management features, including JWT-based authentication.

## Features

### User Management

 - User Registration: Allow new users to register by providing a username, email, and password. 
 - User Authentication: Implement login functionality to authenticate users.

### Post Management

 - Creating Posts: Authenticated users can create posts with a title and content. 
 - Viewing Posts: Users can view all posts or a specific post.
 - Upvoting Posts: Users can upvote posts, with each user allowed only one upvote per post.

### Comment Management

 - Adding Comments: Users can comment on posts, with each comment linked to the specific post and the user who made the comment. 
 - Viewing Comments: Users can view all comments under a post. 
 - Replying to Comments: Users can reply to comments, with replies nested under the original comment.

## Installation

### Prerequisites
Node.js and npm MySQL

### Setup
- Clone the repository:
```sh
git clone https://github.com/yourusername/social-media-api.git 
cd social-media-api
```

### Install dependencies:
```sh
npm install
```

- Set up the MySQL database: 
```sh
Create a new MySQL database. Run the provided SQL scripts to create the necessary tables: 
file name is tables.sql
```
- Create a .env file in the root directory and add the following environment variables:
```sh
PORT=3000 
JWT_SECRET=your_jwt_secret_key
DB_HOST=localhost 
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password 
DB_NAME=social_media
```

- Start the server: 
```sh
npm run start
```

## Middleware JWT Authentication Middleware

The authenticateToken middleware is used to protect routes that require
authentication. It verifies the JWT token and extracts the user
information.


## Error Handling
The API uses centralized error handling middleware to
catch and handle errors gracefully. Errors are logged, and appropriate
HTTP status codes and error messages are returned to the client.





