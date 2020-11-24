import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import PortfolioInfo from "../components/PortfolioInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Projects />
    <PortfolioInfo />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
