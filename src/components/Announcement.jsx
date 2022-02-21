import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #FF8E00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const Announcement = () => {
  return <Container>Join LufuMart as a seller and start earning!</Container>;
};

export default Announcement;
