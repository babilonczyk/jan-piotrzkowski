import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Ruby", icon: "💎" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "SQL", icon: "🗄️" },
        { name: "CSS", icon: "🎨" },
        { name: "HTML", icon: "🧡" },
        { name: "Rust", icon: "⚙️" }
      ]
    },
    {
      title: "Frameworks", 
      skills: [
        { name: "Ruby on Rails", icon: "🚂" },
        { name: "Angular", icon: "🅰️" },
        { name: "Vue.js", icon: "💚" },
        { name: "RSpec", icon: "🧪" },
        { name: "GraphQL", icon: "🔗" },
        { name: "TailwindCSS", icon: "🎨" },
        { name: "SCSS", icon: "💅" },
        { name: "Sidekiq", icon: "⚡" }
      ]
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Git", icon: "📂" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Redis", icon: "🔴" },
        { name: "Docker", icon: "🐳" },
        { name: "Heroku", icon: "🟣" },
        { name: "AWS", icon: "☁️" }
      ]
    },
    {
      title: "Professional",
      skills: [
        { name: "Remote Work", icon: "🌍" },
        { name: "Project Coordination", icon: "📊" },
        { name: "Agile/Scrum", icon: "🔄" },
        { name: "Scalable Solutions", icon: "📈" },
        { name: "Team Leadership", icon: "👥" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Technical Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies and frameworks, constantly learning and adapting to the latest industry standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="cursor-default bg-white border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600"
                    tabIndex={0}
                  >
                    <span className="mr-2" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
