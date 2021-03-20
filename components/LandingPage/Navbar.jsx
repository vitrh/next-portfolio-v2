import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HamburgerDiv,
  HamburgerMenu,
  ItemDiv,
  Items,
  Logo,
  Menu,
  Name,
  NavContainer,
  NavDiv,
} from "./Navbar.Styled";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavDiv>
        <Link href="/">
          <Name isOpen={isOpen} data-glitch="Vinh">
            Vinh
          </Name>
        </Link>
        <HamburgerDiv isOpen={isOpen} onClick={openMenu}>
          <HamburgerMenu isOpen={isOpen} />
          <HamburgerMenu isOpen={isOpen} />
        </HamburgerDiv>
      </NavDiv>

      <Menu isOpen={isOpen}>
        <ItemDiv href="/about">
          <Items data-glitch="◖About"> ◖About </Items>
        </ItemDiv>
        <ItemDiv href="#work" onClick={openMenu}>
          <Items data-glitch="◖Work"> ◖Work </Items>
        </ItemDiv>
        <ItemDiv href="#contact" onClick={openMenu}>
          <Items data-glitch="◖Contact"> ◖Contact </Items>
        </ItemDiv>
      </Menu>
    </NavContainer>
  );
};
