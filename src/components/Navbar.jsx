import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
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

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>LufuMart</Logo>
          <MenuItem><CategoryOutlinedIcon style={{marginRight:"5px"}} />Categories</MenuItem>
          <MenuItem><CasinoOutlinedIcon style={{marginRight:"5px"}}/>Services </MenuItem>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16, display: "flex-end" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><FavoriteBorderOutlinedIcon style={{marginRight:"10px"}}/>Wishlist</MenuItem>
          <MenuItem><AccountCircleOutlinedIcon style={{marginRight:"10px"}} />Account</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon style={{marginRight:"10px"}} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
