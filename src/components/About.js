import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import * as S from "./styles"

export default () => {
  return (
    <S.Window id="about">
      <h1>About</h1>
      <S.Container>
        <h3>
          I work in web development and specialize in MERN and JAM stack
          progressive web apps. I work mostly with React, GraphQL and Gatsby.js,
          but picking up a new language or framework is no problem for me.
        </h3>
        <i>
          <h4>Interested in working with me?</h4>
        </i>
        <S.Button as={AnchorLink} href="#contact">
          Let's get in contact
        </S.Button>
      </S.Container>
    </S.Window>
  )
}
