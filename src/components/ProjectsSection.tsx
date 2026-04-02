import SectionHeader from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Emotion Cipher",
    description: "Advanced cryptography infused with emotional sentiment analysis. Secure your payloads while preserving the underlying psychological subtext.",
    github: "https://github.com/Aditi-Nandiraju/Emotion-Encryption",
    demo: "https://emotion-encryption--aditin06.replit.app/",
  },
  {
    title: "LinkTrack",
    description: "LinkTrack is a secure web application that transforms long URLs into manageable short links with advanced administrative controls. The platform features a user dashboard where creators can set click limits, toggle link availability, and update destination URLs in real-time. By providing live analytics—including total clicks, creation timestamps, and last-accessed data—LinkTrack offers full visibility into link performance. Built with data persistence and user authentication, it ensures a reliable and scalable solution for digital asset management.",
    github: "https://github.com/Aditi-Nandiraju/link-buddy",
    demo: "https://url-short-track.lovable.app/auth",
  },
  {
    title: "TapNex AI Customer Support Agent",
    description: "TapNex AI is a RAG-driven support agent designed to provide accurate information about NFC-based event infrastructure and cashless payment systems. The platform uses a Retrieval-Augmented Generation pipeline to pull real-time answers from a specific company knowledge base regarding recharges, refunds, and sponsor branding. To ensure reliability, the system features a strict knowledge restriction, refusing to answer queries outside the provided documentation. By combining LLM power with verified context, TapNex AI delivers precise, human-like assistance for both event organizers and attendees.",
    github: "https://github.com/Aditi-Nandiraju/Agentic-Ai",
  },
  {
    title: "EcoVerse",
    description: "A website built during Cheat better event. It helps the user become more environmentally conscious by providing personalized tips, tracking their carbon footprint, and suggesting sustainable alternatives for daily activities. Built using React ",
    github: "https://github.com/Aditi-Nandiraju/lovable-website",
  },
  {
    title: "Idea Organizer",
    description: "A simple web app to jot down and organize your ideas. It features a clean interface for adding, editing, and categorizing ideas, making it easy to keep track of your creative thoughts. Built with React and localStorage for data persistence.",
    github: "https://github.com/Aditi-Nandiraju/idea_organizer",
    demo: "https://idea-organizer.netlify.app/"
  },
];

const ProjectsSection = ({ onAdd }: { onAdd: () => void }) => (
  <section className="mb-16">
    <SectionHeader title="Projects" onAdd={onAdd} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="glass-card flex flex-col">
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
