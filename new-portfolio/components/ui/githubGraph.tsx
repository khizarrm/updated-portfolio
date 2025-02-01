"use client"

import { useEffect, useState } from 'react'

interface Contribution {
  date: string;
  count: number;
  level: number;
  weekday: number;
}

const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function GitHubGraph() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const username = 'your-github-username'
  const token = 'your-github-token'

  // ... keeping the fetch logic the same ...
  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(`https://api.github.com/graphql`, {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                          weekday
                        }
                      }
                    }
                  }
                }
              }
            `
          })
        })

        const data = await res.json()
        const calendar = data.data.user.contributionsCollection.contributionCalendar
        const processedContributions = calendar.weeks.flatMap((week: any) =>
          week.contributionDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
            level: getLevel(day.contributionCount),
            weekday: day.weekday
          }))
        )

        setContributions(processedContributions)
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
      }
    }
    fetchContributions()
  }, [username, token])

  function getLevel(count: number): number {
    if (count === 0) return 0
    if (count <= 3) return 1
    if (count <= 6) return 2
    if (count <= 9) return 3
    return 4
  }

  const weeks = contributions.reduce((acc: Contribution[][], contrib, i) => {
    const weekIndex = Math.floor(i / 7)
    if (!acc[weekIndex]) {
      acc[weekIndex] = []
    }
    acc[weekIndex].push(contrib)
    return acc
  }, [])

  const monthLabels = weeks.reduce((acc: { month: string, offset: number }[], week, i) => {
    if (week && week[0]) {
      const date = new Date(week[0].date)
      const month = date.getMonth()
      if (i === 0 || new Date(weeks[i - 1][0].date).getMonth() !== month) {
        acc.push({ month: MONTHS[month], offset: i })
      }
    }
    return acc
  }, [])

  return (
    <div className="p-6 bg-background/80 rounded-lg">
      <h3 className="text-lg font-medium mb-8">GitHub Contributions</h3>
      
      <div className="flex justify-center"> {/* Center the entire graph */}
        <div className="min-w-fit">
          {/* Month labels with fixed height and better spacing */}
          <div className="h-6 relative flex mb-2">
            <div className="w-7" /> {/* Spacing for day labels */}
            <div className="flex">
              {monthLabels.map(({ month, offset }, i) => (
                <div
                  key={i}
                  className="absolute text-sm text-muted-foreground"
                  style={{ left: `${offset * 15 + 30}px` }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Day labels with better alignment */}
            <div className="flex flex-col gap-[3px] text-xs text-muted-foreground mt-[1px]">
              {DAYS.map((day, i) => (
                <div key={i} className="h-3 w-6 text-right pr-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Contribution grid with adjusted spacing */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className="w-3 h-3 rounded hover:ring-1 hover:ring-primary transition-all"
                      style={{
                        backgroundColor: `var(--color-calendar-halloween-graph-day-L${day.level}-bg)`
                      }}
                      title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}