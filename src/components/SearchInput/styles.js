import styled from 'styled-components'

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