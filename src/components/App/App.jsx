import { Widget } from 'components/Widget/Widget';
export const App = () => {
  return (
    <>
      <div
        style={{
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework 02
      </div>
      <Widget></Widget>
    </>
  );
};
