import PropTypes from 'prop-types';

const MainProgress = ({ currentValue, maxValue }) => {
  const progressPercentage = ((currentValue / maxValue) * 100).toFixed(2);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <progress
        id="main-progress"
        value={currentValue}
        max={maxValue}
        aria-label={`Progress: ${progressPercentage}%`}
      />
      <p style={{ marginTop: '10px', color: 'var(--primary-text)' }}>
        {progressPercentage}% Complete
      </p>
    </div>
  );
};

MainProgress.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

MainProgress.defaultProps = {
  currentValue: 0,
  maxValue: 100,
};

export default MainProgress;