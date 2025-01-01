
const MainProgress = ({currentValue, maxValue}) => {
    return (
        <>
            <progress id='main-progress' value={currentValue} max={maxValue} />
        </>
    );
};

export default MainProgress;