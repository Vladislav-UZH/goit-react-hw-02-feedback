import PropTypes from 'prop-types';
import { List, Value, Item } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <Value>Good: {good}</Value>
      </Item>
      <Item>
        <Value>Neutral: {neutral}</Value>
      </Item>
      <Item>
        <Value>Bad: {bad}</Value>
      </Item>
      <Item>
        <Value>Total: {total}</Value>
      </Item>
      <Item>
        <Value>Positive feedback: {`${positivePercentage || '0'}%`}</Value>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
