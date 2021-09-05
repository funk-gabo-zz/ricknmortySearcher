import { useState } from "react";
import { TitleContainer } from "./styles";
import Title from '../../assets/RNM.png'
import { HomeContainer } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { InputContainer } from "./styles";
import { useApi } from "../../hooks/useApi";
import { ListOfCards } from "../../components/ListOfCards";

export const Home = () => {
    const [inputText, setInputText] = useState('')
    const [inputSearch, setInputSearch] = useState('')

    const [data] = useApi(`https://rickandmortyapi.com/api/character/?name=${inputSearch}`)

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputSearch(inputText)
    }
    const handleChange = (e) => {
        console.log(inputText)
        setInputText(e.target.value)
    }
    return (
        <HomeContainer>
            <TitleContainer>
                <img src={Title} width={320} />
            </TitleContainer>
            <InputContainer>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' />
                    <button type='submit'><AiOutlineSearch size={22} /></button>
                </form>
            </InputContainer>
            <ListOfCards data={data} />
        </HomeContainer>
    );
}