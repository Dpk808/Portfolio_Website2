import { Award, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud & DevOps",
      items: [
        "AWS Solutions Architect - Associate",
        "Crowdstrike University - Cloud Specialist",
        "Crowdstrike University - Falcon Administrator",
      ],
    },
    {
      title: "CyberSecurity",
      items: [
        "Introduction to Cybersecurity",
        "Ethical Hacker",
        "TryHackMe Active Learner",
      ],
    },
    {
      title: "Programming & Development",
      items: [
        "Become a Java Master",
        "Become a C Master",
        "Become a C++ Master",
        "SQL (Basics)",
      ],
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Certifications
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((category, index) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:glow-effect animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary w-6 h-6" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
