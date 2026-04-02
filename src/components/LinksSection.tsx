import SectionHeader from "./SectionHeader";

const LinksSection = ({ onAdd }: { onAdd: () => void }) => {
  const links = `https://github.com/alexjohnson
https://leetcode.com/alexjohnson
https://linkedin.com/in/alexjohnson
https://twitter.com/alexjdev
https://alexjohnson.dev`;

  return (
    <section className="mb-16">
      <SectionHeader title="Links" onAdd={onAdd} />
      <div className="glass-card p-8">
        <textarea
          className="auto-textarea font-mono text-sm leading-relaxed"
          defaultValue={links}
          rows={1}
        />
      </div>
    </section>
  );
};

export default LinksSection;
