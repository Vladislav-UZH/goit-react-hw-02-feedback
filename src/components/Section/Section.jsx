const Section = ({ title, children }) => {
  //   console.log(title);
  return (
    <div>
      <h2>{title ?? 'Please leave feedback!'}</h2>
      {children}
    </div>
  );
};
export default Section;
// import { Component } from 'react';

// class Widget extends Component {
//   static propTypes = {};
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback!</h1>
//       </div>
//     );
//   }
// // }
