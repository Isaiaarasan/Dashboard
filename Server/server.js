// Force nodemon restart
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB().then(async () => {
    // Create demo user if it doesn't exist
    const User = require('./models/User');
    const bcrypt = require('bcryptjs');
    try {
        const demoUser = await User.findOne({ email: 'demo@example.com' });
        if (!demoUser) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('password123', salt);
            await User.create({
                name: 'Demo Admin',
                email: 'demo@example.com',
                password: hashedPassword
            });
            console.log('Demo user created: demo@example.com / password123');
        }
    } catch (err) {
        console.error('Error creating demo user:', err);
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
