import React from "react"
import { Flex } from "react-flex-ready"
import { graphql, useStaticQuery } from "gatsby"

import Project from "../templates/project"
import * as S from "./styles"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                description
                live_link
                code_link
              }
            }
          }
        }
      }
    `
  )

  const renderProjects = () => {
    return data.allMarkdownRemark.edges.map(project => {
      const projectData = project.node
      const {
        title,
        description,
        live_link,
        code_link,
      } = projectData.frontmatter
      const { id } = projectData

      return (
        <Project
          title={title}
          description={description}
          liveLink={live_link}
          codeLink={code_link}
          id={id}
        />
      )
    })
  }

  return (
    <S.Window id="projects">
      <S.StyledH1>Projects</S.StyledH1>
      <Flex col={3}>{renderProjects()}</Flex>
    </S.Window>
  )
}
