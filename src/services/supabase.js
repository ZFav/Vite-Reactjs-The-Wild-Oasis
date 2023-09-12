import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jugxgiluqccqbnzrporr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Z3hnaWx1cWNjcWJuenJwb3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzUyNzMsImV4cCI6MjAwOTc1MTI3M30.jyv1LMGM-DJTd6H12QA-QhGdpucUjg2XAyhzi-Zkmbw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
