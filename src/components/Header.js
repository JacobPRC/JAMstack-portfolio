import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

const ListLink = ({ href, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <AnchorLink href={href}>{children}</AnchorLink>
  </li>
)

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 1.5rem;
`

const StyledH3 = styled.h3`
  display: inline;
  color: #183c28;
`
const StyledUl = styled.ul`
  list-style: none;
  float: right;
`

export default () => (
  <Header>
    <AnchorLink
      href="#intro"
      style={{ textShadow: `none`, backgroundImage: `none` }}
    >
      <StyledH3>Jacob's Portfolio</StyledH3>
    </AnchorLink>
    <StyledUl>
      <ListLink href="#projects">Projects</ListLink>
      <ListLink href="#about">About</ListLink>
      <ListLink href="#contact">Contact</ListLink>
    </StyledUl>
  </Header>
)
