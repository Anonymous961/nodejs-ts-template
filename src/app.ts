import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // HTTP request logging

// Routes
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Node.js!');
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Error Handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

export default app;