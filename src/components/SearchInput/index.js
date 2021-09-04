import { useState } from "react";
import { InputContainer } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import Redirect from 'react-router-dom';

export const SearchInput = ({match}) => {
    const [inputText, setInputText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(match)
    }
    const handleChange = (e) =>{
        setInputText(e.target.value)
        console.log(inputText)
    }
    return (
        <InputContainer>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' />
                <button type='submit'><AiOutlineSearch size={22} /></button>
            </form>
        </InputContainer>
    );
}