import { Container, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title ?? 'Please leave feedback!'}</Title>
      {children}
    </Container>
  );
};
export default Section;
