import styled from 'styled-components/native'
import {TextInput} from 'react-native'

export const Container = styled(TextInput)`
flex: 1;
width: 100%;
min-height: 56px;
max-height: 56px;

background-color: ${({theme}) => theme.COLORS.GRAY_700};
color: ${({theme}) => theme.COLORS.WHITE};

font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

border-radius: 6px;
padding: 16px ;
`