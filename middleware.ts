import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);
  
  // Refresh session if expired - required for Server Components
  const { data: { session }, error } = await supabase.auth.getSession();

  // Define protected routes that require authentication
  const protectedRoutes = ['/projects', '/testers', '/reports', '/settings', '/account'];
  const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  
  // Define auth routes
  const authRoutes = ['/signin'];
  const isAuthRoute = authRoutes.some(route => request.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute && !session) {
    // Redirect to signin if accessing protected route without session
    const redirectUrl = new URL('/signin', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthRoute && session) {
    // Redirect to home if accessing auth routes with session
    const redirectUrl = new URL('/', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
