import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import SectionHeader from "./SectionHeader";

const certs = [
  {
    title: "Full-Stack Web Development",
    description: "Completed comprehensive course covering React, Node.js, Express, MongoDB, authentication, deployment, and testing best practices.",
    image: cert1,
  },
  {
    title: "Cloud Architecture Fundamentals",
    description: "Learned AWS services including EC2, S3, Lambda, DynamoDB, and CloudFormation for building scalable cloud applications.",
    image: cert2,
  },
];

const CertificatesSection = ({ onAdd }: { onAdd: () => void }) => (
  <section className="mb-16">
    <SectionHeader title="Certificates & Courses" onAdd={onAdd} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certs.map((c) => (
        <div key={c.title} className="glass-card overflow-hidden flex flex-col">
          <img src={c.image} alt={c.title} loading="lazy" className="w-full h-48 object-cover" />
          <div className="p-6 flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CertificatesSection;
