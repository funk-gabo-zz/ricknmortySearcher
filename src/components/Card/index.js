import { CardContainer, CardNameContainer } from "./styles";

export const Card = ({name, image, id}) => {
    return (
        <CardContainer to={`/detail/${id}`}>
            <img src={image} alt='Summer' />
            <CardNameContainer>
                <span>{name}</span>
            </CardNameContainer>
        </CardContainer>
    );
}