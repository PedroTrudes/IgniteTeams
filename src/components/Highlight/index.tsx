import { Text } from "react-native"
import * as High from './styles';
import { GroupCard } from "@components/GroupCard";

type Props = {
    title: string,
    subtitle: string
}

export function Highlight({title, subtitle} : Props) {
    return(
        <High.Container>
            <High.Title>{title}</High.Title>
            <High.Subtitle>{subtitle}</High.Subtitle>
        </High.Container>
    )
}