import styled from "styled-components"

const Title = styled.h1`

font-weight: 400;
margin: 0.5rem 0;

`;

const LargeTitle = styled(Title)`
font-size: 6rem;

@media  (max-width: 700px){
    font-size: 4rem;
}
`;


export  {
    Title,
    LargeTitle,
};