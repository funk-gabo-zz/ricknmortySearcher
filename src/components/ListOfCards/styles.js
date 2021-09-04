import styled from "styled-components";

export const ListOfCardsContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    max-width: 1100px;
    justify-items: center;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
`