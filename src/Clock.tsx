import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [clocks, setClocks] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    });
    return () => clearInterval(timer);
  }, []);

  const refreshTime = () => {
    setCurrentTime(new Date());
  };

  const addAnotherClock = () => {
    const newClock = (
      <div key={Date.now()}>
        <div>{currentTime.toLocaleTimeString()}</div>
      </div>
    );
    setClocks([...clocks, newClock]);
  };

  return (
    <div>
      <div>{currentTime.toLocaleTimeString()}</div>
      <Button onClick={refreshTime}>Refresh Time</Button>
      <Button onClick={addAnotherClock}>Add Another Clock</Button>
      <div>
        {clocks.map((clock, index) => (
          <div key={index}>
            <div>{clock.props.children.props.children}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock;