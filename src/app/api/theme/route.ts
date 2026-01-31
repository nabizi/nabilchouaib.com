import {NextRequest} from 'next/server';

export function GET(request: NextRequest) {
  const url = request.nextUrl;
  const theme = request.cookies.get('theme')?.value ?? 'light';
  
  return new Response(
    `User prefers ${theme} theme`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    }
  );
}