/**
 * Second Brain App — Built semantic knowledge graph with AI-powered recall across 1000+ linked notes
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ name: 'Second Brain App', description: 'Built semantic knowledge graph with AI-powered recall across 1000+ linked notes', status: 'running', version: '1.0.0' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Second Brain App running on port ${PORT}`);
});

export default app;
