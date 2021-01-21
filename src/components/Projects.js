import React from "react"
import { Flex } from "react-flex-ready"
import { graphql, useStaticQuery } from "gatsby"

import Project from "../templates/project"
import HighlightedProject from "../components/HighlightedProject"
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
      const { title, description, code_link } = projectData.frontmatter
      const { id } = projectData

      return (
        <Project
          title={title}
          description={description}
          codeLink={code_link}
          id={id}
        />
      )
    })
  }

  return (
    <div id="projects">
      <S.StyledH1>Projects</S.StyledH1>
      <HighlightedProject />
      <br />
      <Flex col={3}>{renderProjects()}</Flex>
    </div>
  )
}
