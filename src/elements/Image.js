import styled from "styled-components"

const LandingImage = styled.div`
height: 100vh;
width: 100vw;
/* position: fixed; */




background: ${props => `
linear-gradient(
    ${props.theme.primaryOpacity},
    ${props.theme.primaryOpacity}
    ),
    url(${props.img}) no-repeat center center fixed
`};
background-size: cover;


`;

export default LandingImage;