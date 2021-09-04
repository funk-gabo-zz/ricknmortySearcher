import { Card } from "../Card";
import { ListOfCardsContainer } from "./styles";


export const ListOfCards = () => {
    const array = [1,2,3,4,5];
    return (
        <ListOfCardsContainer>
        {array.map(card => < Card key={card} />)}
        </ListOfCardsContainer>
    );
}