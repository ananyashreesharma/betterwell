# Troubleshooting Guide

## Registration Network Error

If you're getting "Network error. Please try again." when registering, follow these steps:

### 1. Check if Server is Running
```bash
# Check if port 5000 is in use
lsof -i :5000

# Or check if the server process is running
ps aux | grep node
```

### 2. Start the Server
```bash
cd Server
npm start
```

You should see: `App listen on port http://localhost:5000`

### 3. Test Server Connection
```bash
curl http://localhost:5000/api/test
```

Should return: `{"message":"API connection successful","timestamp":"..."}`

### 4. Check MongoDB Connection
Make sure your MongoDB connection string in `Server/config.env` is correct.

### 5. Common Issues and Solutions

#### Port Already in Use
```bash
# Kill process using port 5000
kill -9 $(lsof -t -i:5000)
```

#### Dependencies Missing
```bash
cd Server
npm install
cd ../client
npm install
```

#### CORS Issues
The server has CORS enabled, but if you're still having issues, check the browser console for CORS errors.

### 6. Manual Start Process

1. **Start Server:**
   ```bash
   cd Server
   npm start
   ```

2. **Start Client (in new terminal):**
   ```bash
   cd client
   npm start
   ```

3. **Test Registration:**
   - Go to http://localhost:3000/register
   - Fill in all fields
   - Submit the form

### 7. Debug Information

If the issue persists, check:

1. **Browser Console** (F12) for JavaScript errors
2. **Server Console** for backend errors
3. **Network Tab** in browser dev tools for request/response details

### 8. Quick Fix Script

Use the provided start script:
```bash
./start-app.sh
```

This will automatically:
- Install dependencies
- Start the server
- Start the client
- Handle cleanup on exit

## Still Having Issues?

1. Make sure you have Node.js version 14 or higher
2. Check that all dependencies are installed
3. Verify MongoDB is accessible
4. Try clearing browser cache
5. Check firewall settings 