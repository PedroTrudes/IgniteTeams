import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GREEN_500};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
`;