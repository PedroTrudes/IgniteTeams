import * as PlayerCards from "./style";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
    name: string,
    onRemove: () => void;
}

export function PlayerCard({name, onRemove}: Props){
    return(
        <PlayerCards.Container>
            <PlayerCards.Icon name="person"/>
            <PlayerCards.Name>{name}</PlayerCards.Name>
            <ButtonIcon icon="close" type="SECUNDARY" onPress={onRemove}/>
        </PlayerCards.Container>
    )
}