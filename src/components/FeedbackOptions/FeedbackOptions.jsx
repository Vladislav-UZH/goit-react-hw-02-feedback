import PropTypes from 'prop-types';
import { Component } from 'react';
import { List, Item, Btn } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    updateStats: PropTypes.func.isRequired,
  };
  static defaultOptions = {
    options: undefined,
  };

  render() {
    const { options, updateStats } = this.props;
    return (
      <List>
        {options.map(option => {
          return (
            <Item total={options} key={option}>
              <Btn
                onClick={() => {
                  let satOption = option.toLowerCase();
                  return updateStats(satOption);
                }}
              >
                {option}
              </Btn>
            </Item>
          );
        })}
      </List>
    );
  }
}
export default FeedbackOptions;
