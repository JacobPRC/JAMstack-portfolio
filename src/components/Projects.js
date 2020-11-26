import React from "react"
import { Flex } from "react-flex-ready"

import Project from "../templates/project"
import * as S from "./styles"

export default () => {
  return (
    <S.Window id="projects">
      <S.StyledH1>Projects</S.StyledH1>
      <Flex col={3}>
        <Project />
        <Project />
        <Project />
        <Project />
      </Flex>
    </S.Window>
  )
}
