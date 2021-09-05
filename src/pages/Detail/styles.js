import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #333;
    display: flex;
    justify-content: center;
`
export const CharContainer = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100vh;
`

export const TopChar = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #2d3a5f;
    img{
        width: 230px;
        border-radius: 50%;
    }
`

export const NameChar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 6vh;
    background: #131313;
    color: white;
    padding: 10px 0;
    span{
        font-size: 30px;
        display: inline;
        font-weight: bold;
    }
`
export const DetailCharContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`

export const colorChar = [
    'red',
    'purple',
    'yellow',
    'green'
]