import React from "react"
import styled from "styled-components"

import * as S from "./styles"

const Container = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

const Window = styled.div`
  margin: 4rem auto;
`

const StyledH1 = styled.h1`
  text-align: center;
`

const StyledH3 = styled.h3`
  max-width: 500px;
`

export default () => {
  return (
    <Window>
      <StyledH1>About This Portfolio</StyledH1>
      <Container>
        <StyledH3>This Portfolio was built from scratch using Gatsby.</StyledH3>
        <StyledH3> Want to see the source code?</StyledH3>
        <br />
        <S.Button as="a" href="https://github.com/jacobPRC">
          Check it out on Github
        </S.Button>
      </Container>
    </Window>
  )
}
