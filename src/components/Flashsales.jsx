import styled from "styled-components";
import { flashsales } from "../data";
import { mobile } from "../responsive";
import FlashsalesItem from "./FlashsalesItem";
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

const Flashsales = () => {
  return (
    <>
      <ContainerHead>
        <ContainerHeadLeft>Flash Sales</ContainerHeadLeft>
        <ContainerHeadRight><Link to = "/categories" style={{color: "black"}}>Explore All</Link></ContainerHeadRight>
      </ContainerHead>
      <Container>
        {flashsales.map((item) => (
          <FlashsalesItem item={item} key={item.id} />
        ))}
      </Container>
    </>  
  );
};

export default Flashsales;
