import styled from "styled-components";
import { electronics } from "../data";
import Electronic from "./Electronic";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

const Electronics = () => {
  return (
    <>
      <ContainerHead>
        <ContainerHeadLeft>Electronics</ContainerHeadLeft>
        <ContainerHeadRight><Link to = "/electronics" style={{color: "black"}}>See All</Link></ContainerHeadRight>
      </ContainerHead>
      <Container>
        {electronics.map((item) => (
          <Electronic item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Electronics;
