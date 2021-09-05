import styled from "styled-components";

export const CharItem = styled.div`
    min-width: 320px;
    max-width: 425px;
    height: 200px;
    background-color: ${({color}) => color};
`

export const DetailChar = ({color}) => {
    return (
            <CharItem color={color} />
    );
}