import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import * as S from "./styles"

export default () => {
  return (
    <S.Container id="intro">
      <h1>
        Hi! My name is Jacob, and I make MERN and JAM stack progressive web apps
      </h1>
      <S.Button as={AnchorLink} href="#projects">
        Check out some of my projects
      </S.Button>
    </S.Container>
  )
}
