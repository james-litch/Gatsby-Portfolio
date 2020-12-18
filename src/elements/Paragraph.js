import styled from 'styled-components';

const Paragraph = styled.p`
font-size: 2rem;
color: ${(props) => props.color || props.theme.color};

@media (max-width: ${(props) => props.theme.mobileBreakpoint}){
    font-size: 1.5rem;
}
`;

const SmallParagraph = styled(Paragraph)`
font-size: 1.5rem;
background-color: transparent;
@media (max-width: ${(props) => props.theme.mobileBreakpoint}){
    font-size: 1.2rem;
}
`;

const ToolName = styled(Paragraph)`
font-size: 1.2rem;
text-align: left;
@media (max-width: ${(props) => props.theme.mobileBreakpoint}){
    font-size: 1rem;
}
`;

export {
  Paragraph,
  SmallParagraph,
  ToolName,
};
