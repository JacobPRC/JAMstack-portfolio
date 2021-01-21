import React from "react"
import styled from "styled-components"

const Card = styled.div`
  padding: 1rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  h4 {
    color: #212121;
  }
  a {
    color: #212121;
  }
  p {
    color: #707070;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Content = styled.div`
  padding: 1rem 0;
`

export default () => (
  <Card>
    <Content>
      <h2>Todo Champion</h2>
      <i>
        <h4>
          A JAMstack clone of <a href="https://todoist.com/">Todoist</a> built
          with React, Gatsby, FaunaDB and Netlify.
        </h4>
      </i>
      <br />
      <Flex>
        <a href="https://todochampion.netlify.app">View Site</a>
        <a href="https://github.com/JacobPRC/gatsby-todo">View Code</a>
      </Flex>
    </Content>
  </Card>
)
