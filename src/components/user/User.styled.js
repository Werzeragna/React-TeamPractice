import styled from "styled-components";

// export const Paragraf = styled.p`
// font-size:24px;
// color: blue;
// background-color: lightblue;
// &:hover {
//     color: red;
// }
// `

// export const Span = styled.span`
// color: green;
// ${Paragraf}:hover & {
//     background-color: cyan;
// }
// `

export const Span = styled.span`
color: ${props => props.isRed ? 'red' : 'green'};
`
export const Paragraf = styled.p`
font-size:24px;
color: blue;
background-color: lightblue;
&:hover {
    color: red;
}
&:hover ${Span} {
    background-color:cyan;
}
`



