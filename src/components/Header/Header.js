import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaStrava } from "react-icons/fa";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Hamburger, Bar, MobileMenu } from './HeaderStyles';

const Header = () =>  {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
            <DiCssdeck size="3rem" /> <span>Tanish Khot</span>
          </a>
        </Link>
      </Div1>
      
      <Div2 open={menuOpen}>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>        
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>        
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tanishkhot">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tanishkhot/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.strava.com/athletes/143581032">
          <FaStrava size="3rem" />
        </SocialIcons>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      </Div3>
    </Container>
  );
};

export default Header;