# Task Application Backend README

This README provides an overview of the Task Application Backend, including its purpose, setup, and usage instructions.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

## Introduction

The Task Application Backend is a RESTful API that serves as the backend for a task management application. It provides endpoints for listing tasks, adding tasks, marking tasks as completed, and deleting tasks. This backend is designed to work in conjunction with a front-end application and a database system.

## Features

- listing tasks
- adding tasks
- marking tasks as completed
- deleting tasks

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Node.js (18.17.0)
- npm (Node Package Manager)
- MongoDB
- An integrated development environment (IDE)
- Git (for version control)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Chanuga/Corali-Backend.git
   ```

2. Navigate to the project root directory:

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Set up the configuration as described in the next section.

5. Start the server:

   ```bash
   nodemon server.js || node server.js
   ```

The backend should now be running on `http://localhost:4000` or a different port if configured.

## Configuration

Before running the backend, you need to add a .env file to the root directory. It should have below 2 values,

- PORT (Port where the application will be running)
- MONGO_URI (Mongodb connection url)

```bash
cp config.example.js config.js
```

## API Endpoints

The Task Application Backend provides the following API endpoints:

- `POST /api/tasks`: Create a new task.
- `GET /api/tasks`: Retrieve a list of tasks.
- `POST /api/tasks/:taskId`: DeleteTask a specific task by ID.
- `POST /api/tasks/complete/:taskId`: Update a specific task.

---
This is the hosted url of the backend
- https://corali-backend.onrender.com
---