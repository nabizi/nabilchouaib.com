import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

export function generateMetadata() {
  return {
    title: 'Nabil Chouaib - Full Stack Developer',
    description: 'Personal portfolio of Nabil Chouaib, a full stack developer specializing in modern web technologies.',
    openGraph: {
      title: 'Nabil Chouaib - Full Stack Developer',
      description: 'Personal portfolio of Nabil Chouaib, a full stack developer specializing in modern web technologies.',
      type: 'website',
    },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'de': '/de', 
        'fr': '/fr',
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
