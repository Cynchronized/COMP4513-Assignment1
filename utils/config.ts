require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,
  SUPABASE_KEY: process.env.SUPABASE_KEY || "",
  SUPABASE_URL: process.env.SUPABASE_URL || "",
};

export default config;
