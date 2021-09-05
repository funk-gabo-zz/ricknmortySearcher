import styled from "styled-components";
import { CharItem, TitleChar, TitleCharContainer } from "./styles";



export const DetailChar = ({ color, value, att }) => {
    return (
        <CharItem color={color}>
            <TitleCharContainer>
                <TitleChar>{att}</TitleChar>
            </TitleCharContainer>
            <span>{value ? value : 'none'}</span>
        </CharItem>
    );
}