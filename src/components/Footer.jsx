import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  font-size:0.9em ;
  margin-bottom: 1rem;
  &:hover {
    color: "#FF8E00",
  }
`;
const LinkStyle = {
  color:"#000",
  textDecoration:"none",
};

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LufuMart</Logo>
        <Desc>
          Welcome to the lufumart.com website (the "Site") operated within DRC Congo &
          Kenya. We respect your privacy and want to protect your personal information.
          To learn more, please read this Privacy Policy.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Explore LufuMart</Title>
        <List>
          <ListItem><Link to="/" style={LinkStyle}>Home</Link></ListItem>
          <ListItem><Link to="/cart" style={LinkStyle}>Cart</Link></ListItem>
          <ListItem><Link to="/login" style={LinkStyle}>Login</Link></ListItem>
          <ListItem><Link to="/register" style={LinkStyle}>Register</Link></ListItem>
          <ListItem><Link to="/terms" style={LinkStyle}>Terms</Link></ListItem>
          <ListItem><Link to="/privacy-policy" style={LinkStyle}>Privacy Policy</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>About</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>Trending</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>New products</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>Contact Us</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>Other Services</Link></ListItem>
          <ListItem><Link to="/" style={LinkStyle}>Shop All</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px", color:"#FF8E00"}}/> Lufu Road , South Congo.
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px", color:"#FF8E00"}}/> +233 123 456 388
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:"10px", color:"#FF8E00"}} /> contact@lufumart.com
        </ContactItem>
        <Payment src="https://res.cloudinary.com/yugillc/image/upload/q_auto/v1645396032/lufu-imgs/payment_ub0gs7.png" />
      </Right>
    </Container>
  );
};

export default Footer;
