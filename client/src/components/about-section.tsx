import { CheckCircle } from "lucide-react";

import me from "../assets/me.jpg";
import prince2 from "../assets/prince2.png";
import agilepm from "../assets/agilepm.png";
import scrummaster from "../assets/scrummaster.png";

export function AboutSection() {
  const features = [
    {
      title: "Full Stack Expertise",
      description: "End-to-end development capabilities",
    },
    {
      title: "Modern Technologies",
      description: "Latest frameworks and tools",
    },
    {
      title: "Performance Focus",
      description: "Optimized, fast-loading solutions",
    },
    {
      title: "Client-Centered",
      description: "Dedicated to your success",
    },
  ];

  return (
    <section
      id="about"
      className="pt-16 pb-12 bg-slate-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-20 items-center">
          <div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8"
            >
              About me
            </h2>

            <div className="flex gap-10 pb-8 pt-4">
              <img
                src={me}
                alt="Jan Piotrzkowski"
                className="w-48 h-48 hidden md:block rounded-full shadow-sm object-cover"
                loading="lazy"
              />

              <div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  I'm a Software Developer with 4+ years of experience building
                  scalable solutions for startups and product companies. I take
                  ownership in delivering features and improving codebases while
                  keeping the bigger business picture in mind.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  I've been working remotely since the beginning and am open to
                  worldwide contracts as well as designing solutions from
                  scratch. My experience spans from Ruby on Rails, NodeJS
                  backend development to modern Angular and Vue.js frontends,
                  always focusing on scalable, maintainable solutions.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-accent text-xl mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-slate-900 mt-14 mb-6">
              Certifications:
            </h3>

            <div className="flex justify-start gap-5">
              <img
                src={prince2}
                alt="PRINCE2 Certification"
                className="w-28 h-28 p-2"
              />
              <img
                src={agilepm}
                alt="AgilePM Certification"
                className="w-28 h-28 p-2"
              />
              <img
                src={scrummaster}
                alt="Scrum Master Certification"
                className="w-28 h-28 p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
