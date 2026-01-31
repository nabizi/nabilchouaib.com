import {useTranslations} from 'next-intl';
import {ExternalLink, Users} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  type: string;
  url?: string;
  featured?: boolean;
}

export default function Projects() {
  const t = useTranslations('projects');

  const projects: Project[] = [
    {
      title: 'Blabigo',
      description: 'AI-powered LinkedIn personal branding platform that helps professionals enhance their online presence and reach target audiences effectively.',
      type: 'Flagship Startup',
      url: 'https://blabigo.com',
      featured: true
    },
    {
      title: 'Product Management Consulting',
      description: 'Consulting services for companies looking to improve their product management processes, strategies, and team capabilities.',
      type: 'Consulting Service',
      featured: true
    },
    {
      title: 'Team Leadership Coaching',
      description: 'Coaching programs designed to help product leaders and their teams develop essential skills and achieve higher performance.',
      type: 'Coaching Program',
      featured: true
    },
    {
      title: 'Startup Strategy Workshops',
      description: 'Intensive workshops helping early-stage startups define their product strategy, build roadmaps, and establish effective processes.',
      type: 'Workshop',
    },
    {
      title: 'Product Leadership Training',
      description: 'Comprehensive training programs for aspiring and current product leaders covering strategy, execution, and team management.',
      type: 'Training Program',
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Helping traditional companies navigate digital transformation by implementing modern product management practices and technologies.',
      type: 'Consulting Service',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className={`aspect-video relative overflow-hidden ${
                project.featured 
                  ? 'bg-gradient-to-br from-blue-400 to-purple-600' 
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
              }`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.type}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>{t('liveDemo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking for product management consulting, team coaching, or want to discuss 
            potential partnerships, I'd love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Users size={20} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}