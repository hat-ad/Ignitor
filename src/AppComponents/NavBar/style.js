import Styled from "styled-components";
import colors from "../../Theme/index";
import { Link } from "react-router-dom";

export const NavConainer = Styled.nav`
height:80px;
background-color:${colors.default.background};
width:100vw;
display:flex;
justify-content:space-between;
align-items:center;
padding-right:20px;
`;

export const NavBrandWrapper = Styled.div`
height:100%;
display:flex;
align-items:center;
padding-left:2rem;
`;

export const NavBrand = Styled.img`
height:50px;
`;

export const NavLinksWrapper = Styled.div`
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;

export const NavLinksUl = Styled.ul`
height:100%;
display:flex;
align-items:center;
margin:0;
padding:0;
margin-right:5rem;
`;

export const NavLinks = Styled.li`
list-style:none;
`;

export const Links = Styled(Link)`
display:block;
text-decoration:none;
color:black;
padding:1rem;
font-size:25px;
`;

export const NavBrandLink = Styled(Link)`
display:block;
text-decoration:none;
`;

export const NavSearchBoxWrapper = Styled.div`
width:200px;
height:40px;
background-color: white;
border-radius:9px;
margin-right:1.5rem;
display:flex;
flex-directtion:row;
align-items:center;
`;

export const NavSearchIcon = Styled.img`
height:24px;
width:45px;
padding-left:5px;
`;

export const NavSearchInput = Styled.input`
border:none;
outline:none;
font-size:20px;
padding:5px;
`;

export const ProfileButton = Styled.button`
border:none;
outline:none;
background:none;
margin-right:3rem;
`;

export const ProfileImg = Styled.img`
height:44px;
width:44px;
border-radius:10px;
`;

export const NavBarExtra = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
