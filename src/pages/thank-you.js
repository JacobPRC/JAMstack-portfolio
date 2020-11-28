import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import * as S from "../components/styles"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
`

export default () => (
  <Container>
    <S.StyledH1>Thank you getting in contact with me!</S.StyledH1>
    <br />
    <h3>I'll get back to you as soon as I can</h3>
    <S.Button as={Link} to="/">
      Back to the portfolio
    </S.Button>
  </Container>
)
