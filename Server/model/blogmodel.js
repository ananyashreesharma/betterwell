const { getDb } = require('../database/sqlite');

class BlogModel {
    static async create(blogData) {
        return new Promise((resolve, reject) => {
            const db = getDb();
            const { title, description, username } = blogData;
            
            db.run(
                'INSERT INTO blogs (title, description, username) VALUES (?, ?, ?)',
                [title, description, username],
                function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ id: this.lastID, title, description, username });
                    }
                }
            );
        });
    }

    static async findAll() {
        return new Promise((resolve, reject) => {
            const db = getDb();
            
            db.all('SELECT * FROM blogs ORDER BY created_at DESC', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async findById(id) {
        return new Promise((resolve, reject) => {
            const db = getDb();
            
            db.get('SELECT * FROM blogs WHERE id = ?', [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
}

module.exports = BlogModel;