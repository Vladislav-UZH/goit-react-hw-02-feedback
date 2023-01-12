import { Component } from 'react';

export class Widget extends Component {
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback!</h1>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        <h2>Stats:</h2>
        <ul>
          <li>
            <span>Good:</span>
          </li>
          <li>
            <span>Neutral:</span>
          </li>
          <li>
            <span>Bad:</span>
          </li>
        </ul>
      </div>
    );
  }
}
