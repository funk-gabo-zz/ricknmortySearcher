import { InputContainer } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchInput = ({ history }) => {
    console.log(history)
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }
    return (
        <InputContainer>
            <form onSubmit={handleSubmit}>
                <input type='text' />
            </form>
            <button type='submit'><AiOutlineSearch size={22} /></button>
            </InputContainer>
    );
}