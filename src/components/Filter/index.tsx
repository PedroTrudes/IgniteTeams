import { TouchableOpacityProps } from "react-native";

import * as Filters from "./styles";

type Props = TouchableOpacityProps & Filters.FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest}: Props){
    return(
        <Filters.Container isActive={isActive} {...rest}>
            <Filters.Title>{title}</Filters.Title>
        </Filters.Container>
    )
} 