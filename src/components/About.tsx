import {useTranslations} from 'next-intl';
import {Rocket, Users, Target} from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const expertise = [
    {
      icon: Rocket,
      title: t('skills.entrepreneurship'),
      description: 'Building innovative tech solutions and scaling startups'
    },
    {
      icon: Users,
      title: t('skills.consulting'),
      description: 'Product management consulting for companies and teams'
    },
    {
      icon: Target,
      title: t('skills.coaching'),
      description: 'Leadership coaching and team skill development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <item.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Blabigo - My Flagship Project
            </h3>
            <div className="space-y-6 text-gray-600">
              <p>
                As the founder of Blabigo, I've created an AI-powered LinkedIn personal branding platform 
                that helps professionals and companies enhance their online presence and reach their target audience effectively.
              </p>
              <p>
                My journey combines entrepreneurial experience with deep expertise in product management, 
                allowing me to bridge the gap between technical innovation and business strategy.
              </p>
              <p>
                Through my consulting and coaching work, I help companies build high-performing product teams, 
                implement effective product strategies, and develop strong leadership capabilities within their organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}