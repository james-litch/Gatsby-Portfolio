import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  LandingImage,
  LargeTitle,
  SmallTitle,
  Accent,
  CenterXY,
  Paragraph,
  Divider,
  HorizontalIcons,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../elements"

const AboutPage = () => (
  <Layout>

    <SEO title="About" />
    <CenterXY>
      <SmallTitle>About <Accent>Me</Accent> </SmallTitle>
    </CenterXY>

  </Layout>
)

export default AboutPage