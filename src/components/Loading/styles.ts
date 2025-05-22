import styled from "styled-components/native";

export const Conatiner = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.RED};
`;

export const LoudIndicator = styled.ActivityIndicator.attrs(({theme}) => ({color: theme.COLORS.GREEN_500}))``;