import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import SectionHeader from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard built with React and D3.js. Features interactive charts, data filtering, and responsive design for monitoring KPIs.",
    image: project1,
    github: "https://github.com/alexjohnson/analytics-dashboard",
    demo: "https://analytics-demo.vercel.app",
  },
  {
    title: "Task Manager App",
    description: "Cross-platform task management application with drag-and-drop, categories, and cloud sync capabilities.",
    image: project2,
    github: "https://github.com/alexjohnson/task-manager",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce site with product listings, cart management, Stripe integration, and admin panel.",
    image: project3,
    github: "https://github.com/alexjohnson/ecommerce",
    demo: "https://shop-demo.vercel.app",
  },
];

const ProjectsSection = ({ onAdd }: { onAdd: () => void }) => (
  <section className="mb-16">
    <SectionHeader title="Projects" onAdd={onAdd} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="glass-card overflow-hidden flex flex-col">
          <img src={p.image} alt={p.title} loading="lazy" className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors">
                <Github size={16} /> GitHub
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
