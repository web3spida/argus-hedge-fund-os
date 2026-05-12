import { useEffect, useState } from 'react';

export const useLiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const format = () => {
    return time.toISOString().split('T')[1].split('.')[0] + ' UTC';
  };

  return { format };
};
