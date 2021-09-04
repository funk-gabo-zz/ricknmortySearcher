import { CardContainer, CardNameContainer } from "./styles";

export const Card = () => {
    return (
        <CardContainer>
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt='Summer' />
            <CardNameContainer>
                <span>El mounstuo verde del lago nes</span>
            </CardNameContainer>
        </CardContainer>
    );
}