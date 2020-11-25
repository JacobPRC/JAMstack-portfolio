import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
`

export default ({ children }) => (
  <>
    <Container>
      <Header />
      {children}
    </Container>
    <Footer />
  </>
)
