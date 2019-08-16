import React from "react"
import codeImg from "../images/codeImg.png"
import homeImage from "../images/home-img.jpg"




import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"

import {
  SmallTitle,
  Accent,
  CenterX,
  CardLayout,



} from "../elements"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <CenterX>

      <SmallTitle>My <Accent>Projects</Accent> </SmallTitle>

      <CardLayout>


        <ProjectCard name="Portfolio"
          img={codeImg} languages="React / Gatsby / Pain / Suffering" 
          description="A cool portfolio" github="https://github.com/james-litch/UoLTimetable" url={null} />

        <ProjectCard name="Portfolio"
          img={codeImg} languages="React / Gatsby / Pain / Suffering" 
          description="A cool portfolio" github={null} url={null} />

        <ProjectCard name="Portfolio"
          img={homeImage} languages="React / Gatsby / Pain / Suffering" 
          description="A cool portfolio" github="" url="" />


      </CardLayout>

    </CenterX>
  </Layout>
)

export default ProjectsPage