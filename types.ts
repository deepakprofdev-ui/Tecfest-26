export interface Event {
  id: string;
  title: string;
  category: 'technical' | 'non-technical';
  description: string;
  shortDescription: string;
  rules: string[];
  teamSize: string;
  duration: string;
  iconName: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  event: string;
  category: 'Morning' | 'Afternoon';
}

export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  event: string;
  score: number;
}
