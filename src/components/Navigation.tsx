'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname, useRouter} from '@/i18n/routing';
import {Menu, X, Globe} from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const navItems = [
    {key: 'home', href: '/'},
    {key: 'about', href: '/#about'},
    {key: 'projects', href: '/#projects'},
    {key: 'contact', href: '/#contact'},
  ];

  const languages = [
    {code: 'en', name: 'English'},
    {code: 'de', name: 'Deutsch'},
    {code: 'fr', name: 'Français'},
  ];

  const switchLanguage = (lang: string) => {
    router.replace(pathname, {locale: lang});
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Nabil Chouaib
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t(item.key as any)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Globe size={16} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === locale)?.name}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key as any)}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <p className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Language
                </p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg ${
                      locale === lang.code
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}