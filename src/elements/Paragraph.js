import styled from "styled-components"


const Paragraph = styled.p`
font-size: 2rem;
color: ${props => props.color || props.theme.color};

@media (max-width: ${props => props.theme.mobileBreakpoint}){
    font-size: 1rem;
}
`;

const SmallParagraph = styled(Paragraph)`
font-size: 1.5rem;
`;

export {
    Paragraph,
    SmallParagraph,
}
