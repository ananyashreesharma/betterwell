# BetterWellness - Mental Health Support Platform

A full-stack web application for mental health support, featuring user registration, blog posting, and finding support resources.

## Features

- User registration and authentication
- Blog posting and viewing
- Mental health support resources
- Responsive design

## Tech Stack

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd betterwell
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   - The MongoDB connection is already configured in `Server/config.env`
   - Server runs on port 5000
   - Client runs on port 3000

### Running the Application

**Option 1: Run both client and server together**
```bash
npm start
```

**Option 2: Run separately**

Terminal 1 (Server):
```bash
cd Server
npm start
```

Terminal 2 (Client):
```bash
cd client
npm start
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create new blog
- `GET /view-blog/:id` - Get specific blog

## Project Structure

```
betterwell/
├── client/                 # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   ├── css/           # Stylesheets
│   │   └── App.js         # Main app component
├── Server/                # Node.js backend
│   ├── routes/            # API routes
│   ├── model/             # Database models
│   ├── database/          # Database connection
│   └── App.js             # Server entry point
└── README.md
```

## Recent Fixes Applied

- ✅ Fixed login button text (was showing "Register")
- ✅ Added password hashing for security
- ✅ Improved error handling throughout
- ✅ Fixed port configuration
- ✅ Added loading states and user feedback
- ✅ Fixed React class/className issues
- ✅ Added proper JWT token handling
- ✅ Improved form validation

## Security Notes

- Passwords are now properly hashed using bcrypt
- JWT tokens are generated for authentication
- Input validation added to forms

## Troubleshooting

1. **Port already in use**: Make sure ports 3000 and 5000 are available
2. **Database connection error**: Check your MongoDB connection string in `Server/config.env`
3. **Module not found**: Run `npm install` in both client and Server directories

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License