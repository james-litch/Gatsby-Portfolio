import React from 'react'
import styled from "styled-components"


import {
    Circle,
    HorizontalIcons,
    HoverImage,
    Button,
    CardWrapper,
    CenterXY,
    Accent,

} from '../elements'


const TitleBar = styled.div`
display: grid;
width: 100%;
height: 20px;
grid-template-columns: 1fr 5fr;
color: ${props => props.theme.primary};
font-size: 0.9rem;

background: linear-gradient(#ebebeb, #d5d5d5);
border-top: 1px solid #f3f1f3;
border-bottom: 1px solid #b1aeb1;
border-radius: 6px 6px 0px 0px;
padding: 0px 5px;

`;

const ProjectCard = props => (
    <CardWrapper borderRadius="6px" width="300px" height="320px">

        <TitleBar>

            <HorizontalIcons width="3rem" height="1rem">
                <Circle radius="0.75rem" color="#ff5c5c" />
                <Circle radius="0.75rem" color="#ffbd4c" />
                <Circle radius="0.75rem" color="#00ca56" />
            </HorizontalIcons>

            {props.name}
        </TitleBar>

        <HoverImage img={props.img} height="250px" width="300px">
            <p> <Accent>Languages : </Accent>{props.languages}</p>
            <p><Accent>Description : </Accent>{props.description}</p>

        </HoverImage>



        <HorizontalIcons width="300px" height="50px">
            <a href={props.github} target="_blank">

                <Button activeLink={props.github} height="30px" width="120px">Github</Button>
            </a>

            <a href={props.url} target="_blank">

                <Button activeLink={props.url} height="30px" width="120px">Live url</Button>
            </a>

        </HorizontalIcons>

    </CardWrapper>

)


export default ProjectCard