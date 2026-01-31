import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import '../globals.css';

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: ''});

  return {
    title: 'Nabil Chouaib - Tech Entrepreneur & Product Management Consultant',
    description: t('meta.description'),
    openGraph: {
      title: 'Nabil Chouaib - Tech Entrepreneur & Product Management Consultant',
      description: t('meta.description'),
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de', 
        'fr': '/fr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}