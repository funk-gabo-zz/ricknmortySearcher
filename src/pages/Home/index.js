import {  TitleContainer } from "./styles";
import Title from '../../assets/RNM.png'
import { SearchInput } from "../../components/SearchInput";

export const Home = () => {
    return (
        <>
            <TitleContainer>
                <img src={Title} width={320} />
            </TitleContainer>
            <SearchInput />
        </>
    );
}