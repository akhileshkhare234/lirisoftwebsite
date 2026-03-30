import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Supabase Schema Design (SQL):
 * 
 * -- Leads Table
 * CREATE TABLE leads (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   service TEXT,
 *   location TEXT,
 *   message TEXT,
 *   status TEXT DEFAULT 'new' -- new, contacted, qualified, closed
 * );
 * 
 * -- Geo Pages Table (for programmatic SEO data)
 * CREATE TABLE geo_pages (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   service_slug TEXT NOT NULL,
 *   location_slug TEXT NOT NULL,
 *   city TEXT NOT NULL,
 *   state TEXT NOT NULL,
 *   country TEXT NOT NULL,
 *   custom_content TEXT,
 *   UNIQUE(service_slug, location_slug)
 * );
 * 
 * -- Blog Posts
 * CREATE TABLE posts (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   title TEXT NOT NULL,
 *   slug TEXT UNIQUE NOT NULL,
 *   content TEXT NOT NULL,
 *   excerpt TEXT,
 *   author_id UUID REFERENCES auth.users(id),
 *   published_at TIMESTAMP WITH TIME ZONE,
 *   category TEXT,
 *   tags TEXT[]
 * );
 */
