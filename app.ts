import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://iutxaypndkntwluzprvj.supabase.co'; 
const supabaseKey: string = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();

app.use(cors());
app.use(express.json());

export default app; 
