import { Globe, Server, Laptop, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Static Websites",
      description:
        "Lightning-fast, SEO-optimized static websites built with modern frameworks. Perfect for portfolios, landing pages, and business websites.",
      features: ["SEO Optimization", "Mobile Responsive", "Fast Loading"],
    },
    {
      icon: Server,
      title: "Full-stack Development",
      description:
        "Robust frontend & backend solutions with APIs, databases, and server architecture. Scalable systems built for performance and security.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Cloud Deployment",
      ],
    },
    {
      icon: Laptop,
      title: "Remote Contracting",
      description:
        "Worldwide remote contract work and consulting services. Experienced in working across different time zones and with international teams.",
      features: [
        "Remote Development",
        "International Contracts",
        "Technical Consulting",
        "Project Coordination",
      ],
    },
  ];

  return (
    <section id="services" className="py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
          >
            Development Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From simple static websites to complex full-stack applications, I
            provide comprehensive development solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="border border-slate-200 h-full">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                  <service.icon
                    className="text-primary h-10 w-10"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 text-slate-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className="text-accent w-5 h-5 mr-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
