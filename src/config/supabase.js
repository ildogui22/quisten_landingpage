import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project URL and anon key
const supabaseUrl = 'https://ttwxnuztxfkfinlawvyu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0d3hudXp0eGZrZmlubGF3dnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5ODUzODIsImV4cCI6MjA3MjU2MTM4Mn0.kadakapjehU2UFgy70Rxhfuko98gJgwY8gZQ2SRBOBE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)