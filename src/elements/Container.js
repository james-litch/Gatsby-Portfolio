import styled from "styled-components"

const CenterX = styled.div`
width: 100vw;
padding: 5vh 2vh;
text-align: center;
`;

const CardLayout = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 1rem;
margin: 0;
align-items: center;
justify-items: center;



`;

const CardWrapper = styled.div`

height: ${props => props.height || "50px"};
width:  ${props => props.width || "50px"};
background-color: ${props => props.color || "white"};
border-radius: ${props => props.borderRadius || "50px"};
box-shadow: 0px 0px 20px black;
grid-template-rows: 20px auto auto;


`;

const CenterXY = styled(CenterX)`
height: ${props => props.height || "100px"};
height: 100vh;
padding: 5vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`;

export {
  CenterX,
  CenterXY,
  CardLayout,
  CardWrapper,
};