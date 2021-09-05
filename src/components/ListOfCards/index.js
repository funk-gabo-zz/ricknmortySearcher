import { Card } from "../Card";
import { ListOfCardsContainer } from "./styles";


export const ListOfCards = ({data}) => {
    if(!data.results){
        return null
    }
    return (
        <ListOfCardsContainer>
        {data.results.map((char => <Card 
            key={char.id}
            name={char.name}
            image={char.image}
            />))}
        </ListOfCardsContainer>
    );
}