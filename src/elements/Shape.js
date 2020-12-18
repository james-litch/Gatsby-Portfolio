import styled from 'styled-components';


const Circle = styled.div `
  height: ${(props) => props.radius || '50px'};
  width:  ${(props) => props.radius || '50px'};
  background-color: ${(props) => props.color || 'white'};
  border-radius: 50%;
`;

const Bar = styled.div `
height: ${(props) => props.height || '50px'};
width:  ${(props) => props.width || '50%'};
background-color: ${(props) => props.color || props.theme.secondaryText};
border-radius: 10px;
margin: 5px 0px;
`;

export {
  Circle,
  Bar,
}
;
