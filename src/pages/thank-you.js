import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import * as S from "../components/styles"

export default () => (
  <Layout>
    <S.StyledH1>Thank you getting in contact with me!</S.StyledH1>
    <br />
    <h3>I'll get back to you as soon as I can</h3>
    <S.Button as={Link} to="/"></S.Button>
  </Layout>
)
