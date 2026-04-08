type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? (
        <p className="text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
