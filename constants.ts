import { Event, LeaderboardEntry, ScheduleItem } from './types';
import { Monitor, Cpu, Code, Brain, Gamepad2, Search, Zap, Trophy } from 'lucide-react';

export const TECH_EVENTS: Event[] = [
  {
    id: 't1',
    title: 'Paper Presentation',
    category: 'technical',
    shortDescription: 'Showcase your innovative research and ideas.',
    description: 'A platform to present your research work, innovative ideas, and technical knowledge to a panel of experts. Topics include AI/ML, IoT, Blockchain, and more.',
    rules: ['Max 2 members per team', 'Abstract submission required', '8 mins presentation + 2 mins Q&A'],
    teamSize: '1-2',
    duration: '10 mins',
    iconName: 'Monitor'
  },
  {
    id: 't2',
    title: 'Project Expo',
    category: 'technical',
    shortDescription: 'Display your working hardware/software prototypes.',
    description: 'Demonstrate your working models and prototypes. This is your chance to turn your ideas into reality and impress the judges.',
    rules: ['Max 4 members per team', 'Prototype must be working', 'Poster required'],
    teamSize: '2-4',
    duration: 'All Day',
    iconName: 'Cpu'
  },
  {
    id: 't3',
    title: 'Technical Quiz',
    category: 'technical',
    shortDescription: 'Test your geek quotient in this rapid-fire round.',
    description: 'A battle of brains! Test your technical knowledge across various domains including CS, IT, Electronics, and General Tech.',
    rules: ['2 members per team', 'No electronic gadgets allowed', '3 rounds: Prelims, Buzzer, Rapid Fire'],
    teamSize: '2',
    duration: '2 Hours',
    iconName: 'Brain'
  },
  {
    id: 't4',
    title: 'Debugging Contest',
    category: 'technical',
    shortDescription: 'Find the bugs, fix the code, win the prize.',
    description: 'Given a set of broken code snippets in C, C++, Java, or Python, your task is to identify the logical and syntax errors and fix them.',
    rules: ['Individual participation', 'Time-based evaluation', 'No internet access'],
    teamSize: '1',
    duration: '1 Hour',
    iconName: 'Code'
  }
];

export const NON_TECH_EVENTS: Event[] = [
  {
    id: 'nt1',
    title: 'E-Gaming',
    category: 'non-technical',
    shortDescription: 'Battle it out in BGMI and Valorant.',
    description: 'The ultimate esports showdown. Compete against the best teams in BGMI (Mobile) and Valorant (PC).',
    rules: ['Squad entry only', 'Bring your own mobile/peripherals', 'Fair play mandatory'],
    teamSize: '4',
    duration: '3 Hours',
    iconName: 'Gamepad2'
  },
  {
    id: 'nt2',
    title: 'Treasure Hunt',
    category: 'non-technical',
    shortDescription: 'Solve clues and find the hidden treasure.',
    description: 'An exciting adventure across the campus. Solve riddles, find locations, and race against time to find the final treasure.',
    rules: ['3-5 members per team', 'Physical activity involved', 'Time trial'],
    teamSize: '3-5',
    duration: '2 Hours',
    iconName: 'Search'
  },
  {
    id: 'nt3',
    title: 'Connections',
    category: 'non-technical',
    shortDescription: 'Connect images to find the technical term.',
    description: 'A visual quiz where you connect unrelated images to form a meaningful technical term or phrase.',
    rules: ['2 members per team', 'Visual rounds only'],
    teamSize: '2',
    duration: '1 Hour',
    iconName: 'Zap'
  },
  {
    id: 'nt4',
    title: 'IPL Auction',
    category: 'non-technical',
    shortDescription: 'Build your dream team with a virtual budget.',
    description: 'Experience the thrill of the IPL Auction. Manage your virtual budget and bid for the best players to build the strongest team.',
    rules: ['3 members per team', 'Virtual money allocated', 'Strategic bidding'],
    teamSize: '3',
    duration: '2 Hours',
    iconName: 'Trophy'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { id: 's1', time: '09:00 AM', event: 'Inauguration Ceremony', category: 'Morning' },
  { id: 's2', time: '10:00 AM', event: 'Paper Presentation & Project Expo Starts', category: 'Morning' },
  { id: 's3', time: '10:30 AM', event: 'Technical Quiz Prelims', category: 'Morning' },
  { id: 's4', time: '11:00 AM', event: 'Guest Lecture by Industry Expert', category: 'Morning' },
  { id: 's5', time: '01:00 PM', event: 'Lunch Break', category: 'Afternoon' },
  { id: 's6', time: '02:00 PM', event: 'E-Gaming Finals & Treasure Hunt', category: 'Afternoon' },
  { id: 's7', time: '03:00 PM', event: 'IPL Auction & Debugging', category: 'Afternoon' },
  { id: 's8', time: '04:30 PM', event: 'Valedictory & Prize Distribution', category: 'Afternoon' },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, teamName: 'Alpha Coders', event: 'Debugging', score: 980 },
  { rank: 2, teamName: 'Tech Titans', event: 'Paper Pres.', score: 950 },
  { rank: 3, teamName: 'Cyber Punks', event: 'E-Gaming', score: 920 },
  { rank: 4, teamName: 'Neuro Network', event: 'Project Expo', score: 890 },
  { rank: 5, teamName: 'Binary Bosses', event: 'Quiz', score: 850 },
];
