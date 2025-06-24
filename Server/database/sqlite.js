const sqlite3 = require('sqlite3').verbose();

// Use in-memory database for Vercel deployment
const dbPath = process.env.NODE_ENV === 'production' ? ':memory:' : './database/betterwell.db';

let db;

const initDatabase = async () => {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database:', err);
                reject(err);
                return;
            }
            console.log('Connected to SQLite database');
            
            // Create tables
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

                // Insert demo data for production
                if (process.env.NODE_ENV === 'production') {
                    db.run(`INSERT OR IGNORE INTO blogs (title, description, username) VALUES 
                        ('Welcome to Better-Wellness', 'This is a demo blog post. The backend is now fully functional!', 'Demo User'),
                        ('Mental Health Matters', 'Taking care of your mental health is just as important as physical health.', 'Wellness Advocate'),
                        ('Finding Your Inner Peace', 'Meditation, mindfulness, and finding activities that bring you joy can help create a sense of inner peace.', 'Mindfulness Coach')
                    `);
                }
            });
            
            resolve();
        });
    });
};

const getDb = () => {
    if (!db) {
        throw new Error('Database not initialized');
    }
    return db;
};

module.exports = { initDatabase, getDb }; 