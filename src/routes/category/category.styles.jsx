import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    row-gap: 50px;
`

export const CategoryTitle = styled.h2`
    font-family: 48px;
    font-weight: 1000;
    margin-bottom: 25px;
    text-align: center;
`