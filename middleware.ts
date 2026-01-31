import {routing} from '@/i18n/routing';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  if (!routing.locales.some(locale => pathname.startsWith(`/${locale}`))) {
    request.nextUrl.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};