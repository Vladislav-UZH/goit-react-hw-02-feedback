import styled from '@emotion/styled';
const List = styled.ul`
  margin: 12px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Item = styled.li``;
const Btn = styled.button`
  padding: 12px 40px;
  cursor: pointer;
  width: 170px;
  /* height: 70px; */
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #e2580a;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;
  :hover,
  :focus {
    background-color: #c94f09;
  }
`;
export { List, Item, Btn };
