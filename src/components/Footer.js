import React from "react"
import styled from "styled-components"

const Footer = styled.div`
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Footer>
    <a
      href="https://github.com/jacobPRC"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
      style={{ textShadow: "none" }}
    >
      <span role="img" aria-label="emoji">
        👏
      </span>{" "}
      Say hi on GitHub
    </a>
  </Footer>
)
