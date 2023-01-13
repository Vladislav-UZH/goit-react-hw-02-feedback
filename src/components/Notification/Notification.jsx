const Notification = ({ message }) => {
  return (
    <div>
      <p>{message ?? 'There is no feedback'}</p>
    </div>
  );
};

export default Notification;
