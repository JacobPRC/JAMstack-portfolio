import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import * as S from "./styles"

const Container = styled.div`
  max-width: 500px;
  height: 75vh;
  margin-top: 2rem auto;
`

export default () => {
  return (
    <Container id="intro">
      <h1>
        Hi! My name is Jacob, and I make MERN and JAM stack progressive web apps
      </h1>
      <S.Button as={AnchorLink} href="#projects">
        Check out some of my projects
      </S.Button>
    </Container>
  )
}
