import PropTypes from 'prop-types';
import { List, Value, Item } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        Good:
        <Value> {good}</Value>
      </Item>
      <Item>
        Neutral:
        <Value> {neutral}</Value>
      </Item>
      <Item>
        Bad:
        <Value> {bad}</Value>
      </Item>
      <Item>
        Total:
        <Value> {total}</Value>
      </Item>
      <Item>
        Positive feedback:
        <Value> {`${positivePercentage || '0'}%`}</Value>
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
