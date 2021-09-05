import { useState, useEffect } from "react"
import { BackContainer, CharContainer, DetailCharContainer, DetailContainer, NameChar, TopChar } from "./styles"
import { colorChar } from "./styles"
import { DetailChar } from "../../components/DetailChar"
import { IoArrowUndo } from "react-icons/io5";

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
                    <DetailChar color={colorChar[0]} att={'gender'} value={char.gender} />
                    <DetailChar color={colorChar[1]} att={'species'} value={char.species} />
                    <DetailChar color={colorChar[2]} att={'status'} value={char.status} />
                    <DetailChar color={colorChar[3]} att={'type'} value={char.type} />
                </DetailCharContainer>
                <BackContainer to='/'>
                <span><IoArrowUndo size={30} /></span>
                </BackContainer>
            </CharContainer>
        </DetailContainer>
    )
}