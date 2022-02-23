import styled from "styled-components";
import { recent } from "../data";
import { mobile } from "../responsive";
import RecentItem from "./RecentItem";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const ContainerHead = styled.div`
  padding: 0 30px;
  margin-top: 5%;
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
// const ContainerHeadRight = styled.div`
//   ${mobile({ padding: "0px", flexDirection:"column" })}
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   text-decoration: underline;
// `;

const Categories = () => {
  return (
    <>
      <ContainerHead>
        <ContainerHeadLeft>Recently Viewed</ContainerHeadLeft>
        {/* <ContainerHeadRight><Link to = "/categories" style={{color: "black"}}>See All</Link></ContainerHeadRight> */}
      </ContainerHead>
      <Container>
        {recent.map((item) => (
          <RecentItem item={item} key={item.id} />
        ))}
      </Container>
    </>  
  );
};

export default Categories;
