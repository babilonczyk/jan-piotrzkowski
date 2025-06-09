import { Button } from "@/components/ui/button";

import plane from "../assets/plane.png";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative gradient-bg text-white pt-20 md:pt-20 lg:pt-28 pb-6 md:pb-8 lg:pb-20 overflow-hidden"
      role="banner"
    >
      <img
        src={plane}
        alt="Plane flying in the sky"
        className="absolute top-50 sm:top-30 md:top-10 z-10 left-2/3 transform -translate-x-1/2 w-2/3  opacity-20"
        loading="lazy"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center z-20">
          <div className="z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-10 mt-10 z-20">
              Full Stack Developer &
              <span className="text-cyan-300 z-20"> Web Expert</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg z-20">
              Software Engineer with 4+ years of experience building scalable
              solutions. Available for worldwide remote contracts and consulting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white z-20 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                size="lg"
                aria-label="Let's talk - go to contact section"
              >
                Let's talk
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                className="bg-white z-20 hidden sm:flex text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                size="lg"
                aria-label="Learn more about my experience"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
