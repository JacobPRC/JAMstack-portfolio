import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import * as S from "./styles"

const Container = styled.div`
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 600;
  padding-bottom: 3%;
`

export default () => {
  return (
    <Container id="intro">
      <H1>Let's make some kick ass web apps together!</H1>
      <br />
      <S.Button as={AnchorLink} href="#projects">
        Check out some of my projects
      </S.Button>
    </Container>
  )
}
