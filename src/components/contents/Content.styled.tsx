import styled from "styled-components";

export const Main= styled.div`
background-image:url("./images/background-stars.svg")
`;
export const Container= styled.div`
width:100%;
padding:24px;
display:flex;
flex-direction:column;
justify-content:center;
transition:0.4s;
`;

export const Background =styled.img`
position:absolute;
width:70%;
max-height: 100vh;
transition:0.4s;
`;
export const Box = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
height:65px;
border-bottom:1px solid #ffffff1c;
transition:0.4s;

`;
export const ImageBox = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-colur:${({color}) =>color};
transition:0.4s;
`;
export const TextBox=styled.div`
display:flex;
transition:0.4s;
justify-content:space-between;
gap:25px;

`;
export const Image= styled.img`
width:4px;
height:8px;
transition:0.4s;
opacity:70%;
`;

export const Text =styled.p`
font-size:15px;
line-height:25px;
letter-spacing:1.36px;
color:none;cursor:pointer;
transition:0.4s;
`;
export const LinkBox = styled.p`
font-family:"League Spartan", sans-serif;
font-weight:400;
letter-spacing:1px;
text-decoration:none;
border:none;
transition:0.4s;
color:#fff;
outline:none;
font-size:11px;
font-weight:700;

`;
