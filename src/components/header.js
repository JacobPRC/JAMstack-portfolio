import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
  text-shadow: none;
`

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 1.5rem;
  background-color: #e6cfae;
  height: 2.5rem;
  margin: 0rem;
`

const StyledH3 = styled.h3`
  display: inline;
  color: #183c28;
  padding-left: 2%;
  margin-top: 1rem;
`
const StyledUl = styled.ul`
  list-style: none;
  float: right;
`

const ListLink = ({ href, children }) => (
  <Li>
    <AnchorLink style={{ textShadow: "none" }} href={href}>
      {children}
    </AnchorLink>
  </Li>
)

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { title } = data.site.siteMetadata

  return (
    <Header>
      <AnchorLink
        href="#intro"
        style={{ textShadow: `none`, backgroundImage: `none` }}
      >
        <StyledH3>{title}</StyledH3>
      </AnchorLink>
      <StyledUl>
        <ListLink href="#projects">Projects</ListLink>
        <ListLink href="#about">About</ListLink>
        <ListLink href="#contact">Contact</ListLink>
      </StyledUl>
    </Header>
  )
}
