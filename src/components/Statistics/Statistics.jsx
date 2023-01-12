const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>{title ?? 'Statistics:'}</h2>
      <ul>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
        <li>
          <span>Total: {total}</span>
        </li>
        <li>
          <span>Positive feedback: {positivePercentage}</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
