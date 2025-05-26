import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const supabase = createClient();
  
  // Sign out the user
  await supabase.auth.signOut();
  
  return NextResponse.redirect(new URL('/signin', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), {
    status: 302
  });
} 