import styled from "styled-components";

export const CharItem = styled.div`
    min-width: 320px;
    max-width: 640px;
    height: 200px;
    background-color: ${({color}) => color};
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    align-items: center;
`

export const TitleChar = styled.h1`
    color: #ccc;
    font-size: 48px;
    text-transform: capitalize;
`
export const TitleCharContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
`