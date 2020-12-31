import React from "react";
import {
  NavConainer,
  NavBrand,
  NavLinksWrapper,
  NavLinks,
  Links,
  NavBrandWrapper,
  NavLinksUl,
  NavBrandLink,
  NavSearchBoxWrapper,
  NavSearchIcon,
  NavSearchInput,
  ProfileButton,
  ProfileImg,
  NavBarExtra,
} from "./style.js";
import FireLogo from "../../Assets/Images/Logo.png";
import SearchLogo from "../../Assets/Images/searchico.png";
import profilePic from "../../Assets/Images/Ellipse 1.png";
const NavBar = () => {
  return (
    <NavConainer>
      <NavBrandWrapper>
        <NavBrandLink to="/">
          <NavBrand src={FireLogo} />
        </NavBrandLink>
      </NavBrandWrapper>
      <NavLinksWrapper>
        <NavLinksUl>
          <NavLinks>
            <Links to="/">Docs</Links>
          </NavLinks>
          <NavLinks>
            <Links to="/"> examples</Links>
          </NavLinks>
          <NavLinks>
            <Links to="/">Team</Links>
          </NavLinks>
        </NavLinksUl>
        <NavBarExtra>
          <NavSearchBoxWrapper>
            <NavSearchIcon src={SearchLogo} />
            <NavSearchInput type="text" placeholder="search" />
          </NavSearchBoxWrapper>
          <ProfileButton>
            <ProfileImg src={profilePic} />
          </ProfileButton>
        </NavBarExtra>
      </NavLinksWrapper>
    </NavConainer>
  );
};

export default NavBar;
