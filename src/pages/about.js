import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

import {

  SmallTitle,
  Accent,
  CenterX,
} from "../elements"

const AboutPage = () => (
  <Layout>

    <SEO title="About" />
    <CenterX>
      <SmallTitle>About <Accent>Me</Accent> </SmallTitle>
    </CenterX>

  </Layout>
)

export default AboutPage