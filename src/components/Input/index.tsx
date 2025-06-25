import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as Inputs from "./styles";

export function Input({...rest} : TextInputProps) {
    const {COLORS} = useTheme();
    return(
        <Inputs.Container placeholderTextColor={COLORS.GRAY_300} {...rest}/>
    )
}