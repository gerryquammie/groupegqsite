'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, ExternalLink, Mail, Calendar, MapPin, Shield, Rocket, Timer, 
  Sparkles, ArrowRight, Globe, Star 
} from 'lucide-react';

// Example TypeScript type for your data (adjust as needed)
type Repo = {
  name: string;
  description?: string;
  url: string;
  stars?: number;
};

const HomePage: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Example fetch logic
    async function fetchRepos() {
      const data: Repo[] = [
        { name: 'Demo Repo', url: 'https://github.com/example', stars: 42 }
      ];
      setRepos(data);
    }
    fetchRepos();
  }, []);

  return (
    <main>
      <h1>Welcome to Studio GQ</h1>
      <ul>
        {repos.map((repo, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name} ⭐ {repo.stars}
            </a>
          </motion.li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
