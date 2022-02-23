import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;

  &:hover{
      color: #00ab55;
      background-color: #000;
      opacity: 70%;
      >h1{
          color: #00ab55;
      }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1%;
`;

const InfoDiv = styled.div`
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#fff;
    font-size: 1.5em;
    margin-top: 30%;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const TopSellingItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoDiv >
        <Title>{item.title}</Title>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
      </InfoDiv>
    </Container>
  );
};

export default TopSellingItem;
