"use client";

import { useTranslations } from "next-intl";
import { Mail, Linkedin, Globe, Phone } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8">
                Whether you're interested in product management consulting, team
                coaching, or want to discuss how Blabigo can help enhance your
                LinkedIn presence, I'm here to help you achieve your goals.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hi@nabilchouaib.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} className="text-blue-600" />
                  <span>hi@nabilchouaib.com</span>
                </a>

                <a
                  href="https://blabigo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Globe size={20} className="text-blue-600" />
                  <span>blabigo.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/chouaib-nabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} className="text-blue-600" />
                  <span>https://www.linkedin.com/in/chouaib-nabil/</span>
                </a>

                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={20} className="text-blue-600" />
                  <span>Available for calls</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Specialties:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Product Management Consulting</li>
                  <li>• Team Leadership Coaching</li>
                  <li>• AI-Powered Personal Branding</li>
                  <li>• Startup Strategy & Growth</li>
                </ul>
              </div>
            </div>

            <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="consulting">
                      Product Management Consulting
                    </option>
                    <option value="coaching">Team Leadership Coaching</option>
                    <option value="blabigo">Blabigo Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project or needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © 2026 Nabil Chouaib. Entrepreneur, Consultant, Coach.
          </p>
        </div>
      </div>
    </section>
  );
}
