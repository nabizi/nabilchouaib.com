import {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nabilchouaib.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    })),
  ];
}