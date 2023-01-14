import { Container, Message } from './Notification.styled';
const Notification = ({ message }) => {
  return (
    <Container>
      <Message>{message ?? 'There is no feedback!'}</Message>
    </Container>
  );
};

export default Notification;
