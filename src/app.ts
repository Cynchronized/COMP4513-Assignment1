import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import erasRouter from '../controllers/eras';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/eras', erasRouter);

export default app; 
