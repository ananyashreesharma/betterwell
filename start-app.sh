#!/bin/bash

echo "🚀 Starting BetterWellness Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install server dependencies
echo "Installing server dependencies..."
cd Server
npm install
cd ..

# Install client dependencies
echo "Installing client dependencies..."
cd client
npm install
cd ..

echo "🔧 Starting server..."
# Start server in background
cd Server
npm start &
SERVER_PID=$!
cd ..

# Wait a moment for server to start
sleep 3

echo "🌐 Starting client..."
# Start client
cd client
npm start &
CLIENT_PID=$!
cd ..

echo "✅ Application started!"
echo "📱 Client: http://localhost:3000"
echo "🔌 Server: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both client and server"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping application..."
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    exit 0
}

# Trap Ctrl+C and call cleanup
trap cleanup SIGINT

# Wait for background processes
wait 