import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-center px-4 py-2 border transition-all duration-200 text-sm font-medium backdrop-blur-sm ${
        year === currentYear
          ? "bg-primary/80 text-primary-foreground border-primary/30 hover:bg-primary/90"
          : "bg-card/50 text-card-foreground border-border/30 hover:border-primary/50 hover:bg-card/70"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}