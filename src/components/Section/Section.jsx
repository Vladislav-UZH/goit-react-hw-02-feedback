import { Container, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title ?? 'Please leave feedback!'}</Title>
      {children}
    </Container>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
