import styled from 'styled-components'
import {Email} from 'styled-icons/material'
import {Github,Twitter,LinkedinIn} from 'styled-icons/fa-brands'
import {Envelope} from 'styled-icons/fa-solid'


const HorizontalIcons = styled.div`
display: flex;
flex-direction: row;
justify-items: space-between;
justify-content: space-between;
width: 400px; 

@media (max-width: 700px){
    width: 200px;
}

`;

const MailIcon = styled(Envelope) `
${props => props.theme.iconMixin('4rem','white','700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`,0.5)}

`;

const GithubIcon = styled(Github) `

${props => props.theme.iconMixin('4rem','white','700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`,0.5)}
`;

const TwitterIcon = styled(Twitter) `
${props => props.theme.iconMixin('4rem','white','700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`,0.5)}
`;

const LinkedinIcon = styled(LinkedinIn) `
${props => props.theme.iconMixin('4rem','white','700px')}
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`,0.5)}

`;




export {
    HorizontalIcons,
    MailIcon,
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
}