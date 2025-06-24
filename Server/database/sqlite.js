const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database file in the database directory
const dbPath = path.join(__dirname, 'betterwellness.db');
const db = new sqlite3.Database(dbPath);

// Initialize database tables
const initDatabase = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Users table
            db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                phone TEXT,
                password TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            // Blogs table
            db.run(`CREATE TABLE IF NOT EXISTS blogs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                username TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            // Doctors tables
            db.run(`CREATE TABLE IF NOT EXISTS doctors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialization TEXT NOT NULL,
                location TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                rating REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS anxiety_doctors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialization TEXT NOT NULL,
                location TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                rating REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS depression_doctors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialization TEXT NOT NULL,
                location TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                rating REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS bipolar_doctors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialization TEXT NOT NULL,
                location TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                rating REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS ocd_doctors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialization TEXT NOT NULL,
                location TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                rating REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);
        });

        db.get("SELECT name FROM sqlite_master WHERE type='table'", (err, row) => {
            if (err) {
                console.log('❌ Database initialization error:', err.message);
                reject(err);
            } else {
                console.log('✅ SQLite database initialized successfully');
                resolve();
            }
        });
    });
};

module.exports = { db, initDatabase }; 