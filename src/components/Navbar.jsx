import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import {React, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "60px")}; */
  height: 60px;
  width: 100%;
  @media (min-width: 700px) {
    height: 60px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
//left navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Logo = styled.h1`
  text-decoration: double;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
//search
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 0;
  display: flex;
  align-items: center;
  margin-left: 0px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${mobile({ width: "50px" })}
`;
//center navbar
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
//right navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1em;
  ${mobile({ flex: 2, justifyContent: "center" })}
  `;
const NavbarExtendedContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: right;
  color: white;
  z-index: 2;
  position: fixed;
  @media (min-width: 700px) {
    display: none;
  }
`;
const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  margin-bottom: 0;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  /* ${mobile({ fontSize: "12px", marginLeft: "10px" })} */
  @media (max-width: 700px) {
    display: none;
  }
`;
const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
    >div {
        display: block;
    }
  }
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

const Navbar = () => {

  const [extendNavbar, setExtendNavbar] = useState(false)
  return (
    <Container extendNavbar = {extendNavbar}>
      <Wrapper>
        <Left>
          <Logo><Link to="/" style={{textDecoration: "none", color: "black"}}>LufuMart</Link></Logo>
          <MenuItem>
            <CategoryOutlinedIcon style={{marginRight:"5px"}} />
            <DropdownMenu>
              <span><Link to = "/" style={{textDecoration: "none", color:"black"}}>Categories</Link></span>
              <DropdownContent>
                <Link to="/" style={{textDecoration: "none", color:"black"}}>Dropdown here</Link>
              </DropdownContent>
            </DropdownMenu>
          </MenuItem>
          <MenuItem>
            <CasinoOutlinedIcon style={{marginRight:"5px"}} />
            <DropdownMenu>
              <span><Link to = "/" style={{textDecoration: "none", color:"black"}}>Services</Link></span>
              <DropdownContent>
                <Link to="/" style={{textDecoration: "none", color:"black"}}>Dropdown here</Link>
              </DropdownContent>
            </DropdownMenu>
          </MenuItem>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16, display: "flex-end" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><FavoriteBorderOutlinedIcon style={{marginRight:"10px"}}/><Link to = "/wishlist" style={{textDecoration: "none", color:"black"}}>Wishlist</Link></MenuItem>
          <MenuItem>
            <AccountCircleOutlinedIcon style={{marginRight:"5px"}} />
            <DropdownMenu>
              <span><Link to = "/" style={{textDecoration: "none", color:"black"}}>Account</Link></span>
              <DropdownContent>
                <Link to="/" style={{textDecoration: "none", color:"black"}}>Dropdown here</Link>
              </DropdownContent>
            </DropdownMenu>
          </MenuItem>
          <MenuItem>
            <Link to = "/Cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon style={{marginRight:"10px", color: "black"}} />
              </Badge>
            </Link>
          </MenuItem>
          <OpenLinksButton 
            onClick={() => {
              setExtendNavbar((curr) => (!curr));
            }}
          >
            {extendNavbar ? <CloseIcon /> : <MenuIcon /> }
          </OpenLinksButton>
        </Right>
      </Wrapper>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <Link to = "/">categories</Link>
          <Link to = "/">Services</Link>
          <Link to = "/">Wishlist</Link>
          <Link to = "/">Login</Link>
          <Link to = "/">register</Link>
        </NavbarExtendedContainer>
      )}
    </Container>
  );
};

export default Navbar;
