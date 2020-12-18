/* eslint-disable react/jsx-key */
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  Accent,
  Bar,
  CenterX,
  CardWrapper,
  CardLayout,
  Divider,
  SmallParagraph,
  SmallTitle,
  ToolName,
} from '../elements';


const AboutPage = (props) => {
  const data = useStaticQuery(graphql`
  { allToolsJson { edges { node { name comfortLevel } } } } `);
  const tools = data.allToolsJson.edges;

  return (
    <Layout>
      <SEO title="About" />
      <CenterX>
        <SmallTitle>About <Accent>Me</Accent> </SmallTitle>

        <SmallParagraph>
        I&apos;m James, a Computer Science Graduate specialising in mobile and web development.
        I enjoy producing high-qulaity and efficient applications that fuel engagement with users.
        </SmallParagraph>
        <Divider/>

        <SmallTitle>My <Accent>Tools</Accent> </SmallTitle>

        <CardLayout>

          <CardWrapper color="transparent" width="auto" height="auto" borderRadius="20px" padding="20px">
            {tools.map(({node: tool}) => {
              const confidence = `${tool.comfortLevel}%`;
              return (
                <>
                  <ToolName> {tool.name}</ToolName>
                  <Bar width={confidence} height="5px"/>
                </>
              );
            })}
          </CardWrapper>
        </CardLayout>


      </CenterX>
    </Layout>
  );
};

export default AboutPage;
