import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
// import { small } from "../devices";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const ContainerHead = styled.div`
  padding: 0 30px;
  padding-top: 10px;
  justify-content: space-between;
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

const Categories = () => {
  return (
    <>
      <ContainerHead>
        <ContainerHeadLeft>Categories</ContainerHeadLeft>
        <ContainerHeadRight><Link to = "/categories" style={{color: "black"}}>See All</Link></ContainerHeadRight>
      </ContainerHead>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>  
  );
};

export default Categories;
