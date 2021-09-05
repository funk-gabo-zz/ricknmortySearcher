import styled from "styled-components";

export const TitleContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 120px;
    display: flex;
    justify-content: center;
`

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #333;
    color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`
export const InputContainer = styled.div`
    width:90%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    max-width: 300px;
    background-color: white;
    height: 20px;
    padding: 10px;
    input{
        width: 90%;
        height: 20px;
        border: none;
        outline: none;
        font-size: 22px;
    }
    form{
        display: flex;
        justify-content: space-between;
    }
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`
export const ListOfCardsContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    max-width: 1100px;
    justify-items: center;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
`