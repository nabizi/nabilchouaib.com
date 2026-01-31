import {useTranslations} from 'next-intl';
import {Github, Linkedin, Mail, ArrowDown} from 'lucide-react';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
            {t('subtitle')}
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="mailto:your-email@example.com"
              className="flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown size={24} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}