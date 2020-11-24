import React from "react"
import styled from "styled-components"
import { Item } from "react-flex-ready"

const Card = styled.div`
  padding: 1rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  h4 {
    color: #212121;
  }
  p {
    color: #707070;
  }
`

const Content = styled.div`
  padding: 1rem 0;
`

export default () => (
  <Item col={4} colTablet={6} colMobile={12} marginBottom={30} gap={1} stretch>
    <Card>
      <Content>
        <h4>Name</h4>
        <p>Description</p>
      </Content>
    </Card>
  </Item>
)
