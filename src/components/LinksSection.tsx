import SectionHeader from "./SectionHeader";

const LinksSection = ({ onAdd }: { onAdd: () => void }) => {
  const links = `https://github.com/Aditi-Nandiraju
https://leetcode.com/u/_Aditi________/
https://www.linkedin.com/in/aditi-nandiraju-402940322/
https://www.hackerrank.com/profile/aditi_nandiraju
`;

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
