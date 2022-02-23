import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 40vh;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 60%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
  border-radius: 5%;
`;

const Title = styled.h4`
    color:white;
    font-size: 1em;
    margin-bottom: 1em;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #00ab55;
    color:#fff;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background-color: #fff;
      color:#00ab55;
  }
`;

const SellerItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>VISIT SELLER</Button>
      </Info>
    </Container>
  );
};

export default SellerItem;
