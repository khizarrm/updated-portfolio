"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { espionage, github } from "./contribution-themes";
import { useState, useEffect } from "react";
import YearButton from "./YearButton";
import { getGitHubYears } from "./years";
import EmptyState from "./EmptyState";
import { customTheme } from "./contribution-themes";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const today = new Date().getFullYear();
  const username = 'khizarrm';
  const joinYear = 2024;
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="rounded-xl border border-border/30 bg-background backdrop-blur-md p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-card-foreground mb-4">GitHub Contributions</h2>
      <div className="flex xl:flex-row flex-col gap-4">
        <div className="bg-[hsl(0,0%,12%)]/90 border border-[hsl(0,0%,15%)]/30 p-6 rounded-lg max-w-fit max-h-fit backdrop-blur-sm">
          <GitHubCalendar
            username={username}
            theme={customTheme}
            colorScheme={serverTheme}
            blockSize={13}
            year={calendarYear}
          />
        </div>
        <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
          {years.slice(0, 5).map((year) => (
            <YearButton
              key={year}
              year={year}
              currentYear={calendarYear ?? today}
              onClick={() =>
                setCalendarYear(year === calendarYear ? undefined : year)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}