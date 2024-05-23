"use client"
import React from "react";
import * as C from "./styles";

const Header = () => {
  return (
    <C.HeaderContainer>
      <C.Wrapper>
          <C.Logo src="/logo.png" alt="logo" />
          <C.Avatar src="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_grey_512dp.png" alt="avatar" />
      </C.Wrapper>
    </C.HeaderContainer>
  );
};

export default Header;
