import React, { useState, useEffect } from 'react';
import MainProgress from './mainProgress.jsx';

const YearProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const calculateYearProgress = () => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const endOfYear = new Date(new Date().getFullYear(), 11, 31);
    const currentDate = new Date();
    const totalYearTime = endOfYear - startOfYear;
    const elapsedTime = currentDate - startOfYear;
    const progress = (elapsedTime / totalYearTime) * 100;
    return progress.toFixed(2);
  };

  useEffect(() => {
    const progressValue = calculateYearProgress();
    setProgress(parseFloat(progressValue));
    setIsLoading(false);
  }, []);

  return (
    <div className="year-progress">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <MainProgress currentValue={progress} maxValue={100} />
          <p className="year-progress-text">
            The Progress bar of the year <br />
            Track the entire <label id="year-progress-head">Year </label>
            and see how far we've come!
          </p>
        </>
      )}
    </div>
  );
};

export default YearProgress;