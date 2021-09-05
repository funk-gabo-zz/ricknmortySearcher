import { CardContainer, CardNameContainer } from "./styles";

export const Card = ({name, image}) => {
    return (
        <CardContainer>
            <img src={image} alt='Summer' />
            <CardNameContainer>
                <span>{name}</span>
            </CardNameContainer>
        </CardContainer>
    );
}