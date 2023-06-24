import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import router from './routes/couponRoutes.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(cors());

// API routes
app.use('/api/coupons', router);

// Connect to MongoDB
connect('mongodb://localhost/couponDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
