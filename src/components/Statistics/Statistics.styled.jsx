import styled from '@emotion/styled';
const List = styled.ul`
  margin-top: 10px;
  min-width: 126px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const Item = styled.li`
  color: #d7d7d7;
  font-size: 20px;
  font-weight: 500;
  :not(:last-child) {
    border-right: 1px solid #e2580a;
    padding-right: 10px;
  }
`;
const Value = styled.span`
  color: #e2580a;
  font-size: 18px;
  font-weight: 700;
`;
export { List, Value, Item };
