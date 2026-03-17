// Migration script to move users from JSON file to secure database
// Run with: node scripts/migrate-users.js

const { migrateUsersFromJSON } = require('../lib/database');

async function runMigration() {
  console.log('🚀 Starting user migration from JSON to database...');
  
  try {
    await migrateUsersFromJSON();
    console.log('✅ Migration completed successfully!');
    console.log('📁 Original users.json has been backed up');
    console.log('🔒 Users are now stored securely in database');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

runMigration();