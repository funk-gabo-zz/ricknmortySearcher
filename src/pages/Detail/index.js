import { useState, useEffect } from "react"
import { CharContainer, DetailCharContainer, DetailContainer, NameChar, TopChar } from "./styles"
import { colorChar } from "./styles"
import { DetailChar } from "../../components/DetailChar"

export const Detail = ({ match }) => {
    const [char, setChar] = useState([])
    const { params: { id } } = match
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await res.json()
            setChar(data)
        }
        getData()
    }, [])
    console.log(char)
    return (
        <DetailContainer>
            <CharContainer>
                <TopChar>
                    <img src={char.image} alt={char.name} />
                </TopChar>
                <NameChar>
                    <span>{char.name}</span>
                </NameChar>
                <DetailCharContainer>
                    {colorChar.map(color => <DetailChar color={color} />)}
                </DetailCharContainer>
            </CharContainer>
        </DetailContainer>
    )
}