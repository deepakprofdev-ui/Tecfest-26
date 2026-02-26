import React, { useState } from 'react';
import { MOCK_LEADERBOARD } from '../constants';
import { Trophy, Medal, Crown } from 'lucide-react';

export const Leaderboard: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique events for filter
  const uniqueEvents = ['All', ...Array.from(new Set(MOCK_LEADERBOARD.map(item => item.event)))];

  const filteredData = filter === 'All' 
    ? MOCK_LEADERBOARD 
    : MOCK_LEADERBOARD.filter(item => item.event === filter);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-gray-500 font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {uniqueEvents.map(evt => (
          <button
            key={evt}
            onClick={() => setFilter(evt)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === evt 
                ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {evt}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider border-b border-white/10">
                <th className="p-4 pl-6">Rank</th>
                <th className="p-4">Team Name</th>
                <th className="p-4">Event</th>
                <th className="p-4 text-right pr-6">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredData.map((item) => (
                <tr 
                  key={`${item.teamName}-${item.event}`}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-2">
                       {getRankIcon(item.rank)}
                    </div>
                  </td>
                  <td className="p-4 font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {item.teamName}
                  </td>
                  <td className="p-4 text-gray-400 text-sm">
                    {item.event}
                  </td>
                  <td className="p-4 text-right pr-6 font-bold text-white font-mono">
                    {item.score}
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                 <tr>
                   <td colSpan={4} className="p-8 text-center text-gray-500">
                     No results found for this category yet.
                   </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
