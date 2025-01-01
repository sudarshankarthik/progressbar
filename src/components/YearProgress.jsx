import MainProgress from "./mainProgress.jsx";

const YearProgress = () => {

    const calculateYearProgress = () => {
        const startOfYear = new Date(new Date().getFullYear(), 0, 1); // January 1st of the current year
        const endOfYear = new Date(new Date().getFullYear(), 11, 31); // December 31st of the current year

        const currentDate = new Date(); // Today's date

        // Calculate the time difference in milliseconds
        const totalYearTime = endOfYear - startOfYear;
        const elapsedTime = currentDate - startOfYear;

        // Calculate the percentage
        const progress = (elapsedTime / totalYearTime) * 100;

        return progress.toFixed(2); // Returns the percentage with 2 decimal places
    };

    console.log(calculateYearProgress() + '%'); // Example usage to log the percentage


    return (
        <div className="year-progress">
            <MainProgress currentValue={1} maxValue={100} />
            <p className="year-progress-text">
                The Progress bar of year <br/>
                Track the entire <label id="year-progress-head">Year </label>
                 and see how far we&#39;ve come!
            </p>
        </div>
    );
};

export default YearProgress;