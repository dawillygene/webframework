require('dotenv').config();
const { MongoClient } = require('mongodb');

// Read from .env
const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_DB,
    MONGO_AUTH_DB,
    MONGO_HOST,
    MONGO_PORT
} = process.env;

// Encode credentials for URL safety
const user = encodeURIComponent(MONGO_USER);
const pass = encodeURIComponent(MONGO_PASS);

// Build connection string
const url = `mongodb://${user}:${pass}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTH_DB}`;

async function main() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB with authentication');
        const db = client.db(MONGO_DB);
        const users = db.collection('users');

        await users.insertOne({ name: 'Alice', age: 30 });

        const allUsers = await users.find().toArray();
        console.log('👥 Users:', allUsers);
    } catch (err) {
        console.error('❌ Connection failed:', err);
    } finally {
        await client.close();
        console.log('🔌 Connection closed');
    }
}

main().catch(console.error);
