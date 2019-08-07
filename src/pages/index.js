import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeImage from "../images/home-img.jpg"




import {
  LandingImage,
  LargeTitle,
  Accent,
  Center,
  Paragraph,
  Divider,
  HorizontalIcons,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../elements"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingImage img={homeImage}>
      <Center>

        <LargeTitle>Hello <Accent>World</Accent></LargeTitle>

        <Paragraph>
          I'm James a Computer Science student with a passion for web development.
        </Paragraph>

        <Divider />

        <HorizontalIcons>
        <Link><MailIcon/></Link>
        <Link><GithubIcon/></Link>
        <Link><TwitterIcon/></Link>
        <Link><LinkedinIcon/></Link>
        </HorizontalIcons>

      </Center>

    </LandingImage>
  </Layout>
)

export default IndexPage
