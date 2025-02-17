import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from './config.ts'

const supabaseUrl: string = SUPABASE_URL
const supabaseKey: string = SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);
