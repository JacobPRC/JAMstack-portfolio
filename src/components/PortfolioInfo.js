import React from "react"
import styled from "styled-components"

import * as S from "./styles"

const Window = styled.div`
  margin: 4rem auto;
`

const StyledH1 = styled.h1`
  text-align: center;
  color: #183c28;
`

const StyledH3 = styled.h3`
  max-width: 500px;
`

export default () => {
  return (
    <Window>
      <StyledH1>About This Portfolio</StyledH1>
      <S.CenteredContainer>
        <StyledH3>This Portfolio was built from scratch using Gatsby.</StyledH3>
        <StyledH3> Want to see the source code?</StyledH3>
        <br />
        <S.Button as="a" href="https://github.com/JacobPRC/JAMstack-portfolio/">
          Check it out on Github
        </S.Button>
      </S.CenteredContainer>
    </Window>
  )
}
