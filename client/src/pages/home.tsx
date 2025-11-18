import { SEOHead } from "@/components/seo-head";
import me from "../assets/me.jpg";

const linkPillClass =
  "inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-[12px] font-semibold text-sky-700 underline underline-offset-2 decoration-1 hover:text-sky-600";

const experiences = [
  {
    company: "Menu.pl",
    link: "https://menu.pl",
    role: "Software Engineer | Freelance",
    location: "Remote",
    period: "Nov 2025 - present",
    points: [],
  },
  {
    company: "AirDNA",
    link: "https://www.airdna.co",
    role: "Software Engineer - Uplising Core Team",
    location: "Remote",
    period: "Oct 2025 - present",
    points: [
      "Building new features and maintaining existing ones in the Uplisting product.",
    ],
  },
  {
    company: "Quickmail.com",
    link: "https://quickmail.com",
    role: "Software Engineer II - Core Team",
    location: "EU / Remote",
    period: "Dec 2023 - May 2025",
    points: [
      "Co-created the new Angular component library and transitioned users to the updated UI.",
      "Built the Client Portal for agencies to share insights and metrics with clients.",
      "Improved existing solutions while partnering with designers and the dev team.",
    ],
  },
  {
    company: "Ragnarson.com",
    link: "https://www.ragnarson.com",
    role: "Jr. Ruby on Rails Developer | Project Coordinator",
    location: "EU / Remote",
    period: "Apr 2022 - Dec 2023",
    points: [
      "Worked on cost allocation features driven by automated meter readouts.",
      "Coordinated timelines and stakeholders as project coordinator.",
      "Co-created an internal maintenance tool to reduce recurring task time.",
    ],
  },
  {
    company: "Lemkin.pl",
    link: "https://lemkin.pl",
    role: "Trainee Ruby Developer",
    location: "EU / Remote",
    period: "Jan 2021 - Feb 2022",
    points: [
      "Built REST API features for a chatbot providing Polish legal advice.",
    ],
  },
];

const skills = [
  {
    label: "Languages",
    items: [
      "Ruby",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "CSS",
      "HTML",
      "Rust",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "Ruby on Rails",
      "FastAPI",
      "RSpec",
      "Angular",
      "GraphQL",
      "TailwindCSS",
      "SCSS",
      "React",
      "Ember.js",
      "NodeJS",
      "Pug",
      "HAML",
      "Hanami",
    ],
  },
  { label: "Infra", items: ["Heroku", "AWS", "HuggingFace"] },
  {
    label: "Tools",
    items: [
      "Redis",
      "Git",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Sidekiq",
      "SEO",
      "AEO",
    ],
  },
  {
    label: "Soft skills",
    items: [
      "Ownership",
      "Remote collaboration",
      "Facilitating",
      "Agile",
      "Scrum",
      "Kanban",
    ],
  },
];

const certifications = [
  {
    name: "AgilePM Foundation",
    image: "agilepm.png",
    link: "https://drive.google.com/file/d/1ZLtQU3pXrJvHkeg_VJN_cTSxAPAK9baF/view?usp=sharing",
  },
  {
    name: "Scrum Master Certified",
    image: "scrummaster.png",
    link: "https://drive.google.com/file/d/1k6Cg1AzoqJ91PLJ9LTMuNleen-b4Gobn/view?usp=sharing",
  },
  {
    name: "Prince2 Foundation",
    image: "prince2.png",
    link: "https://drive.google.com/file/d/1gycwzCG_r9X5BV68AZ6p748Ik60r3_0o/view?usp=sharing",
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Jan Piotrzkowski - Software Developer"
        description="Software Developer with 4+ years of experience delivering scalable products for startups and product companies. Remote-first, open to relocation."
        keywords="Jan Piotrzkowski, Software Developer, Ruby on Rails, Angular, Remote, Freelance"
      />
      <main className="min-h-screen bg-white text-slate-900">
        <header className="max-w-4xl mx-auto px-6 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
            <img
              src={me}
              alt="Jan Piotrzkowski"
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover ring-4 ring-sky-100 shadow-sm"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-sm text-sky-700 font-semibold">
                Remote / Costa Rica · Open to relocation
              </div>
              <h1 className="text-3xl font-semibold leading-tight">
                Jan Piotrzkowski{" "}
                <span className="text-sky-600">/ Software Developer</span>
              </h1>
              <p className="text-sm text-slate-700 leading-relaxed">
                Software Developer with 4+ years building scalable products. I
                ship pragmatic features, keep codebases healthy, and focus on
                business impact. Remote since day one. Happy to work on-site
                worldwide. I operate a B2B entity in Poland and can work on
                contract basis.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-sky-700 font-medium">
                <span
                  className="inline-flex h-2 w-2 rounded-full bg-sky-500"
                  aria-hidden="true"
                />
                <span>Let&apos;s talk:</span>
                <a
                  className="underline underline-offset-4 hover:text-sky-600"
                  href="mailto:piotrzkowski.jan@gmail.com"
                >
                  piotrzkowski.jan@gmail.com
                </a>
                <a
                  className="underline underline-offset-4 hover:text-sky-600"
                  href="https://linkedin.com/in/jan-piotrzkowski"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/jan-piotrzkowski
                </a>
                <a
                  className="underline underline-offset-4 hover:text-sky-600"
                  href="https://github.com/babilonczyk"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/babilonczyk
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Professional Experience
          </h2>
          <div className="space-y-6 pl-5">
            {experiences.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 leading-relaxed text-slate-800">
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      {job.role}
                    </div>
                    <div className="text-sm text-slate-600 space-x-1">
                      {job.link ? (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-sky-700 hover:text-sky-600"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-semibold">{job.company}</span>
                      )}
                      <span>·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="text-sm text-sky-700 font-semibold">
                    {job.period}
                  </div>
                </div>
                {job.points.length > 0 && (
                  <ul className="list-disc ml-4 space-y-1 text-sm text-slate-800">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Current Projects (Case Studies)
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-slate-800 pl-5">
            <div className="space-y-2">
              <div className="text-base font-semibold text-slate-900 flex flex-wrap items-center gap-2">
                <span>Labfile Specification</span>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[12px] font-semibold text-sky-700 align-middle">
                  In Progress
                </span>
                <a
                  className={linkPillClass}
                  href="https://spec.labfile.bio"
                  target="_blank"
                  rel="noreferrer"
                >
                  spec.labfile.bio
                </a>
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Goal:</strong> modern, machine-readable format for
                  biological protocols that is deterministic, verifiable, and
                  easy for scientists and engineers.
                </li>
                <li>
                  <strong>Problem:</strong> PDFs/Word protocols are hard to
                  automate, audit, or reproduce - leading to errors and weak
                  transfer between labs and software.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-base font-semibold text-slate-900">
                Landing Pages for Local Businesses
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Outcome:</strong> SEO-friendly landing pages with
                  responsive layouts, clean UI, solving user problems.
                </li>
                <li className="space-y-1">
                  <strong>Links:</strong>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className={linkPillClass}
                      href="https://adwokatkurganelblag.pl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      adwokatkurganelblag.pl
                    </a>
                    <a
                      className={linkPillClass}
                      href="https://teratai.pl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      teratai.pl
                    </a>
                    <a
                      className={linkPillClass}
                      href="https://taximaxi.pl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      taximaxi.pl
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Skills</h2>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-800 list-disc pl-5">
            {skills.map((group) => (
              <li key={group.label} className="leading-relaxed">
                <strong className="text-sky-900">{group.label}:</strong>{" "}
                {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Publications</h2>
          <div className="space-y-2 text-sm font-medium">
            <a
              className={linkPillClass}
              href="https://www.amazon.com/dp/B0FQLPP5RT"
              target="_blank"
              rel="noreferrer"
            >
              Modern SEO for AI Search Engines: How to Show Up in ChatGPT,
              Perplexity, and Gemini Search Results?
            </a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Certifications
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-slate-800">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                className={linkPillClass}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                {cert.name}
              </a>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 sm:px-8 py-6 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-800">
            <div>
              <div className="font-semibold text-sky-900">Education</div>
              <div>AGH University of Science and Technology</div>
              <div>B.S. in Applied Computer Science - Cracow, Poland</div>
            </div>
            <div>
              <div className="font-semibold text-sky-900">Languages</div>
              <div>English (C1), Polish (native)</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
