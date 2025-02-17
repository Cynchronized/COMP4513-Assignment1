require('dotenv').config();

const PORT: string = process.env.PORT
const SUPABASE_KEY = process.env.SUPABASE_KEY

module.exports = {
  PORT,
  SUPABASE_KEY
}

