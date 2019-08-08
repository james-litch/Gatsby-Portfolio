import styled from "styled-components"


const Paragraph = styled.div`
font-size: 2rem;

@media (max-width: ${props => props.theme.mobileBreakpoint}){
    font-size: 1rem;
}
`;

export default Paragraph;