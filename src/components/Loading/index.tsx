import { Text } from "react-native";
import * as Load from "./styles";

export function Loading() {
    return(
        <Load.Conatiner>
            <Load.LoudIndicator />
        </Load.Conatiner>
    )
}