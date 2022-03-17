import { Link } from "react-router-dom";
import styled from "styled-components";
import { small } from "../devices";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
  ${small({ margin: "2px", heigh: "10vh" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
`;

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

const CatTitle = styled.h1`
    font-size:10em ;
    color:white;
    margin-bottom: 20px;
    ${small({ fontSize: "0.5em", heigh: "10vh" })}
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

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <CatTitle>{item.title}</CatTitle>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
