import SectionHeader from "./SectionHeader";
import { Calendar } from "lucide-react";

const events = [
  { name: "React Conf 2025", description: "Attended sessions on React Server Components, concurrent features, and the future of React." },
  { name: "Local Hackathon Winner", description: "Built an AI-powered recipe app in 48 hours. Won first place for best UI/UX design." },
  { name: "Tech Meetup Speaker", description: "Presented a talk on optimizing web performance with lazy loading and code splitting techniques." },
];

const EventsSection = ({ onAdd }: { onAdd: () => void }) => (
  <section className="mb-16">
    <SectionHeader title="Events" onAdd={onAdd} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((e) => (
        <div key={e.name} className="glass-card p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={18} className="text-primary" />
            <h3 className="text-lg font-heading font-semibold text-foreground">{e.name}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{e.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
