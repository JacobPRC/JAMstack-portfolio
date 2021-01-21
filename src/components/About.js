import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import * as S from "./styles"

export default () => {
  return (
    <S.Window id="about">
      <S.StyledH1>About</S.StyledH1>
      <S.Container>
        <h3>
          Looking for a dope web developer? Look no further! I would love to
          help you make the perfect site for your business or be a part of your
          web developing team. I mostly use MERN and JAMstack for web
          development, but I love coding and can jump into any new language or
          framework.
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
