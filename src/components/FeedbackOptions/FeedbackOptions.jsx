import PropTypes from 'prop-types';
import { Component } from 'react';
import {} from './FeedbackOptions.styled';
// const FeedbackOptions = ({ options }) => {
//   return (
//     <ul>
//       {options.map(option => {
//         return (
//           <li key={option}>
//             <button>{option}</button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  };
  static defaultOptions = {
    options: undefined,
  };

  render() {
    const { options, updateStats, countTotalFeedback } = this.props;
    return (
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                onClick={() => {
                  return updateStats(option, countTotalFeedback);
                }}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default FeedbackOptions;
