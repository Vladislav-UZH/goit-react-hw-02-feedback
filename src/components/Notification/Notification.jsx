import { Container, Message } from './Notification.styled';
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return (
    <Container>
      <Message>{message ?? 'There is no feedback!'}</Message>
    </Container>
  );
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
