import { createClient } from "@supabase/supabase-js";
import config from './config'

const supabaseUrl: string = config.SUPABASE_URL
const supabaseKey: string = config.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);
