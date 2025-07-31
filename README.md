# Fastify Todo API

A robust and scalable Todo API built with Fastify framework and MongoDB. This application provides a complete CRUD (Create, Read, Update, Delete) interface for managing todo items with proper error handling, validation, and a well-structured architecture.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#requestresponse-examples)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fast Performance**: Built with Fastify, one of the fastest Node.js web frameworks
- **MongoDB Integration**: Seamless database operations with MongoDB
- **Input Validation**: JSON Schema-based request validation
- **Error Handling**: Comprehensive error handling with custom error classes
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Modular Architecture**: Clean separation of concerns with repositories, services, and controllers
- **Logging**: Built-in request and error logging
- **Environment Configuration**: Flexible configuration through environment variables

## Architecture

The application follows a layered architecture pattern:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic layer
- **Repositories**: Data access layer
- **Routes**: API endpoint definitions
- **Schema**: Request/response validation schemas
- **Error Handling**: Custom error classes and global error handler
- **Utils**: Utility functions and plugins

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 16 or higher)
- MongoDB (version 4.4 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fastify-todo
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

## Configuration

Configure the following environment variables in your `.env` file:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo_db
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | 5001 |
| `MONGODB_URI` | MongoDB connection string | Required |

## Usage

### Development Mode

Run the application in development mode with auto-restart:

```bash
npm run dev
```

### Production Mode

Run the application in production mode:

```bash
npm start
```

The server will start on `http://localhost:5001` (or the port specified in your environment variables).

## API Endpoints

### Base URL
```
http://localhost:5001/api/v1
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ping` | Health check endpoint |
| GET | `/` | Get all todos |
| GET | `/:id` | Get todo by ID |
| POST | `/` | Create a new todo |
| PUT | `/:id` | Update todo by ID |
| DELETE | `/:id` | Delete todo by ID |

## Request/Response Examples

### Create Todo

**Request:**
```http
POST /api/v1/
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation"
}
```

**Response:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API documentation",
    "createdAt": "2025-07-31T10:30:00.000Z",
    "updatedAt": "2025-07-31T10:30:00.000Z"
  }
}
```

### Get All Todos

**Request:**
```http
GET /api/v1/
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Todos retrieved successfully",
  "data": [
    {
      "id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "title": "Complete project documentation",
      "description": "Write comprehensive README and API documentation",
      "createdAt": "2025-07-31T10:30:00.000Z",
      "updatedAt": "2025-07-31T10:30:00.000Z"
    }
  ]
}
```

### Update Todo

**Request:**
```http
PUT /api/v1/64f8a1b2c3d4e5f6a7b8c9d0
Content-Type: application/json

{
  "title": "Complete project documentation - Updated",
  "description": "Write comprehensive README and API documentation with examples"
}
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Complete project documentation - Updated",
    "description": "Write comprehensive README and API documentation with examples",
    "createdAt": "2025-07-31T10:30:00.000Z",
    "updatedAt": "2025-07-31T10:35:00.000Z"
  }
}
```

### Delete Todo

**Request:**
```http
DELETE /api/v1/64f8a1b2c3d4e5f6a7b8c9d0
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Todo deleted successfully"
}
```

## Project Structure

```
fastify-todo/
├── src/
│   ├── app.js                    # Main application configuration
│   ├── index.js                  # Application entry point
│   ├── config/
│   │   └── serverConfig.js       # Server configuration
│   ├── controllers/
│   │   └── todo.controller.js    # Todo request handlers
│   ├── error/
│   │   ├── baseError.js          # Base error class
│   │   ├── notFoundError.js      # Not found error class
│   │   ├── notImplementedError.js # Not implemented error class
│   │   └── validationError.js    # Validation error class
│   ├── repositories/
│   │   ├── repositoryPlugin.js   # Repository plugin registration
│   │   └── todo.repository.js    # Todo data access layer
│   ├── routes/
│   │   ├── index.js              # Route aggregation
│   │   └── v1/
│   │       ├── index.js          # Version 1 route aggregation
│   │       └── todo.routes.js    # Todo route definitions
│   ├── schema/
│   │   └── todoSchema.js         # Request/response validation schemas
│   ├── services/
│   │   ├── servicePlugin.js      # Service plugin registration
│   │   └── todo.service.js       # Todo business logic
│   └── utils/
│       ├── apiResponse.js        # API response utilities
│       ├── errorHandler.js       # Global error handler
│       └── mongoDBPlugin.js      # MongoDB plugin
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## Error Handling

The application implements comprehensive error handling with custom error classes:

### Error Types

- **ValidationError**: Input validation failures
- **NotFoundError**: Resource not found errors
- **NotImplementedError**: Unimplemented functionality
- **BaseError**: Base class for all custom errors

### Error Response Format

All errors return a consistent response format:

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "type": "ErrorType",
    "details": "Additional error details"
  }
}
```

## Development

### Code Structure Guidelines

- **Controllers**: Handle HTTP-specific logic only
- **Services**: Implement business logic and validation
- **Repositories**: Handle database operations
- **Schemas**: Define request/response validation rules
- **Error Classes**: Provide specific error types for different scenarios

### Running Tests

Currently, the project does not include test suites. Consider adding:

- Unit tests for services and repositories
- Integration tests for API endpoints
- End-to-end tests for complete workflows

### Adding New Features

1. Create schema definitions in `/schema`
2. Implement repository methods in `/repositories`
3. Add business logic in `/services`
4. Create controller handlers in `/controllers`
5. Define routes in `/routes`

## Dependencies

### Production Dependencies

- **fastify**: Fast and low overhead web framework
- **@fastify/cors**: CORS plugin for Fastify
- **@fastify/mongodb**: MongoDB plugin for Fastify
- **dotenv**: Environment variable loader
- **fastify-plugin**: Plugin helper for Fastify
- **http-status-codes**: HTTP status code constants

### Development Dependencies

- **nodemon**: Development server with auto-restart

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

### Coding Standards

- Use ES6+ features and modules
- Follow consistent naming conventions
- Add appropriate error handling
- Include input validation
- Write descriptive commit messages

## Author

Soumen Mondal

## Support

For questions, issues, or contributions, please create an issue in the repository or contact the maintainer.
