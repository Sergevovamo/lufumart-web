import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #FF8E00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #00ab55;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Announcement = () => {
  return <Container>Join LufuMart as a seller and start earning!</Container>;
};

export default Announcement;
