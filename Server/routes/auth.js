const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_here';

// Signup endpoint
router.post('/signup', async (req, res) => {
    // Registration is disabled to allow only one admin.
    // Simulate notification sent to admin.
    setTimeout(() => {
        res.status(200).json({ 
            message: 'Notification sent to admin for approval. Please wait for approval.' 
        });
    }, 1000);
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        console.log('Login attempt for:', email);
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found in DB');
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        console.log('User found:', user.email);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });

        res.json({
            message: 'Login successful',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;

