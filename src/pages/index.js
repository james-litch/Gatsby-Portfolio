import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeImage from "../images/home-img.jpg"




import {
  LandingImage,
  LargeTitle,
  Accent,
  CenterXY,
  Paragraph,
  Divider,
  LandingPageIcons,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../elements"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingImage img={homeImage}>
      <CenterXY height="100vh">

        <LargeTitle>Hello <Accent>World</Accent></LargeTitle>

        <Paragraph>
          I'm James a Computer Science student with a passion for web development.
        </Paragraph>

        <Divider />

        <LandingPageIcons width="400px" height="100px">
          <a href="/" target="_blank"><MailIcon /></a>
          <a href="/" target="_blank"><GithubIcon /></a>
          <a href="/" target="_blank"><TwitterIcon /></a>
          <a href="/" target="_blank"><LinkedinIcon /></a>
        </LandingPageIcons>

      </CenterXY>

    </LandingImage>
  </Layout>
)

export default IndexPage
