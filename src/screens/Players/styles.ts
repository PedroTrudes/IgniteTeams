import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Form = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 12px; 
`;

export const NumbersOfPlayers = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
    `};
`;