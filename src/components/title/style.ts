import { Roboto } from "next/font/google";
import styled from "styled-components";

const robotoBold = Roboto({ weight: '900', subsets: ['latin'] })
const robotoNormal = Roboto({ weight: '400', subsets: ['latin'] })

export const Header = styled.h1`
font-size: 34px;
font-family: ${robotoBold.style.fontFamily};
max-width: 449px;
text-align: center;
`
export const SubHeader = styled.h3`
color: #00000063;
font-size: 15px;
font-family: ${robotoNormal.style.fontFamily};
`
export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`