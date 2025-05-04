const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/user.routes');
// const leaveRoutes = require('./routes/leave.routes');
// const attendanceRoutes = require('./routes/attendance.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/leaves', leaveRoutes);
// app.use('/api/attendance', attendanceRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});