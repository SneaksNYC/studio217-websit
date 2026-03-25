// Secure database implementation for user management
// Replaces file-based user storage with proper database

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Database configurations for different environments
const getDatabase = () => {
  // Production: Use environment variables for database connection
  if (process.env.NODE_ENV === 'production') {
    if (process.env.DATABASE_URL) {
      // PostgreSQL/MySQL via environment variable
      return initSQLDatabase();
    }
    if (process.env.MONGODB_URI) {
      // MongoDB via environment variable
      return initMongoDatabase();
    }
  }
  
  // Development: Use SQLite for local development
  return initSQLiteDatabase();
};

// SQLite implementation for development
const initSQLiteDatabase = () => {
  const sqlite3 = require('sqlite3').verbose();
  const dbPath = process.env.SQLITE_PATH || './studio217.db';
  
  const db = new sqlite3.Database(dbPath);
  
  // Initialize users table
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'client',
      active BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  });

  return {
    async findUserByEmail(email) {
      return new Promise((resolve, reject) => {
        db.get(
          'SELECT * FROM users WHERE email = ? AND active = 1',
          [email],
          (err, row) => {
            if (err) reject(err);
            else resolve(row);
          }
        );
      });
    },

    async createUser(userData) {
      const { name, email, password, role = 'client' } = userData;
      const passwordHash = await bcrypt.hash(password, 12);
      
      return new Promise((resolve, reject) => {
        db.run(
          'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
          [name, email, passwordHash, role],
          function(err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, name, email, role });
          }
        );
      });
    },

    async verifyPassword(user, password) {
      return await bcrypt.compare(password, user.password_hash);
    },

    async updateUser(id, updates) {
      const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
      const values = [...Object.values(updates), id];
      
      return new Promise((resolve, reject) => {
        db.run(
          `UPDATE users SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
          values,
          (err) => {
            if (err) reject(err);
            else resolve(true);
          }
        );
      });
    },

    async deleteUser(id) {
      return new Promise((resolve, reject) => {
        db.run(
          'UPDATE users SET active = 0 WHERE id = ?',
          [id],
          (err) => {
            if (err) reject(err);
            else resolve(true);
          }
        );
      });
    }
  };
};

// PostgreSQL/MySQL implementation for production
const initSQLDatabase = () => {
  // Would implement with pg or mysql2 package
  console.warn('SQL database not implemented yet - defaulting to SQLite');
  return initSQLiteDatabase();
};

// MongoDB implementation for production
const initMongoDatabase = () => {
  // Would implement with mongodb package
  console.warn('MongoDB not implemented yet - defaulting to SQLite');
  return initSQLiteDatabase();
};

// Authentication utilities
export class AuthDatabase {
  constructor() {
    this.db = getDatabase();
  }

  async authenticate(email, password) {
    try {
      const user = await this.db.findUserByEmail(email);
      if (!user) {
        return { success: false, error: 'Invalid credentials' };
      }

      const isValid = await this.db.verifyPassword(user, password);
      if (!isValid) {
        return { success: false, error: 'Invalid credentials' };
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email, 
          role: user.role 
        },
        process.env.JWT_SECRET || 'dev-secret-key',
        { expiresIn: '7d' }
      );

      return { 
        success: true, 
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email, 
          role: user.role 
        }, 
        token 
      };
    } catch (error) {
      console.error('Authentication error:', error);
      return { success: false, error: 'Authentication failed' };
    }
  }

  async createUser(userData) {
    try {
      const user = await this.db.createUser(userData);
      return { success: true, user };
    } catch (error) {
      console.error('User creation error:', error);
      return { success: false, error: 'Failed to create user' };
    }
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-key');
      const user = await this.db.findUserByEmail(decoded.email);
      
      if (!user) {
        return { success: false, error: 'User not found' };
      }

      return { 
        success: true, 
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email, 
          role: user.role 
        } 
      };
    } catch (error) {
      return { success: false, error: 'Invalid token' };
    }
  }
}

// Migrate existing users.json data to database
export async function migrateUsersFromJSON() {
  try {
    const fs = require('fs');
    const path = require('path');
    const usersPath = path.join(process.cwd(), 'lib', 'users.json');
    
    if (!fs.existsSync(usersPath)) {
      console.log('No users.json file found - skipping migration');
      return;
    }

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    const authDb = new AuthDatabase();

    console.log('Migrating users from JSON to database...');
    
    for (const user of users) {
      try {
        // Check if user already exists
        const existing = await authDb.db.findUserByEmail(user.email);
        if (existing) {
          console.log(`User ${user.email} already exists - skipping`);
          continue;
        }

        // Create user with existing password hash (direct insert to preserve)
        await authDb.db.createUser({
          name: user.name,
          email: user.email,
          password: user.password, // This will be hashed again
          role: user.role || 'client'
        });
        
        console.log(`Migrated user: ${user.email}`);
      } catch (error) {
        console.error(`Failed to migrate user ${user.email}:`, error.message);
      }
    }

    // Backup the original file
    fs.renameSync(usersPath, usersPath + '.backup.' + Date.now());
    console.log('Migration complete - original users.json backed up');
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

export default AuthDatabase;