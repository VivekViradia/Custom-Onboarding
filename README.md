# Custom-Onboarding

## Overview
Custom-Onboarding is a full-stack application designed to manage user onboarding and admin configuration. It consists of a backend built with Node.js and Express, and a frontend built with Next.js.

## Features
- **Admin Configuration**: Admins can configure onboarding steps and components.
- **User Onboarding**: Users can complete onboarding steps based on the admin-defined configuration.
- **API Endpoints**: Provides RESTful APIs for managing configurations and users.

## Project Structure
```
backend/
  ├── routes/
  │   ├── config.routes.js   # Routes for configuration management
  │   └── user.routes.js     # Routes for user management
  ├── controllers/
  │   ├── config.controller.js   # Logic for configuration APIs
  │   └── user.controller.js     # Logic for user APIs
  ├── models/
  │   ├── config.model.js        # Model for configuration data
  │   └── user.model.js          # Model for user data
  └── db/
      └── db.js                  # Database connection logic

frontend/
  ├── src/
  │   ├── app/
  │   │   ├── admin/             # Admin configuration pages
  │   │   └── onboarding/        # User onboarding pages
  │   ├── components/            # Reusable React components
  │   └── public/                # Static assets
```

## API Endpoints
### Configuration
- `GET /api/config/getConfig`: Fetch the latest configuration.
- `POST /api/config/saveConfig`: Save a new configuration.

### Users
- `POST /api/users/createOrUpdateUser`: Create or update a user.
- `GET /api/users/getAllUsers`: Fetch all users.

## Setup Instructions
### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.template` and configure your environment variables.
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: Next.js, React, Tailwind CSS

## License
This project is licensed under the MIT License.
