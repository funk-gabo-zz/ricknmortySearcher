import styled from "styled-components";

export const CardContainer = styled.div`
        width: 300px;
        height:  70px;
        padding: 5px;
        border-radius: 50px;
        display: flex;
        justify-content: start;
        align-items: center;
        background-color: #1b1b1b;
        box-shadow: 5px 6px 10px black;
        img{
            border-radius: 50%;
            width: 70px;
        }
`
export const CardNameContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    width: 100%;
    height: 40px;
    padding: 5px;
    text-align: center;
    line-height: 26px;
    margin-top: -8px;
    font-weight: 600;
`