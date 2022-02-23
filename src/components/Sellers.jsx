import styled from "styled-components";
import { sellers } from "../data";
import { mobile } from "../responsive";
import SellerItem from "./SellerItem";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const ContainerHead = styled.div`
  padding: 0 30px;
  padding-top: 10px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  flex: 1;
  display: flex;
  align-items: center;
`;
const ContainerHeadLeft = styled.div`
  ${mobile({ padding: "0px", flexDirection:"column" })}
  display: flex;
  align-items: center;
  /* cursor: pointer; */
  font-weight: bold;
`;
const ContainerHeadRight = styled.div`
  ${mobile({ padding: "0px", flexDirection:"column" })}
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
`;

const Sellers = () => {
  return (
    <>
      <ContainerHead>
        <ContainerHeadLeft>Popular Sellers</ContainerHeadLeft>
        <ContainerHeadRight><Link to = "/categories" style={{color: "black"}}>See All</Link></ContainerHeadRight>
      </ContainerHead>
      <Container>
        {sellers.map((item) => (
          <SellerItem item={item} key={item.id} />
        ))}
      </Container>
    </>  
  );
};

export default Sellers;
