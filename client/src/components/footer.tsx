import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Jan Piotrzkowski</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Software Engineer with 4+ years of remote experience, specializing
              in scalable solutions and modern web technologies.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/jan-piotrzkowski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm p-1"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:piotrzkowski.dev@gmail.com"
                className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm p-1"
                aria-label="Send email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
                >
                  Static Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
                >
                  Full-stack Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
                >
                  Freelance Work
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Technologies</h4>
            <ul className="space-y-3 text-slate-300">
              <li>Ruby & Ruby on Rails</li>
              <li>JavaScript & TypeScript</li>
              <li>Angular & React</li>
              <li>PostgreSQL & Redis</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li>piotrzkowski.jan@gmail.com</li>
              <li>Remote work worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-10 text-center text-slate-300">
          <p>&copy; 2025 Jan Piotrzkowski. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
