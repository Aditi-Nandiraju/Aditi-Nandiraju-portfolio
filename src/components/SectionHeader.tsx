interface SectionHeaderProps {
  title: string;
  onAdd: () => void;
}

const SectionHeader = ({ title, onAdd }: SectionHeaderProps) => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="section-title">{title}</h2>
    <button className="add-button" onClick={onAdd} aria-label={`Add ${title}`}>
      +
    </button>
  </div>
);

export default SectionHeader;
