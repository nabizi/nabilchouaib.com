import {routing} from '@/i18n/routing';
import type {NextRequest} from 'next/server';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = routing.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    request.nextUrl.pathname = `/${routing.defaultLocale}${pathname}`;
    return Response.redirect(request.nextUrl);
  }
  
  return undefined;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};