import {TouchableOpacityProps} from "react-native";
import * as ButtonIcons from "./styles";
import { MaterialIcons } from "@expo/vector-icons";


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap,
    type: ButtonIcons.ButtonIconTypesStyleProps
}
export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return(
        <ButtonIcons.Container {...rest}> 
            <ButtonIcons.Icon name={icon} type={type} />
        </ButtonIcons.Container>
    )
}