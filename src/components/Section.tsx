interface SectionProps {
  title: string;
  content: string;
}

export default function Section({ title, content }: SectionProps) {
  return (
    <div>
      <h1 className="font-medium text-xl">{title}</h1>
      <p className="font-normal">{content}</p>
    </div>
  );
}
