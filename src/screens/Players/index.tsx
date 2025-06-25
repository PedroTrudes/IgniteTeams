import { ButtonIcon } from "@components/ButtonIcon";
import * as Player from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
    return(
        <Player.Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera aos times"/>
            <Player.Form>
                <Input placeholder="Nome da pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" type="PRIMARY" />
            </Player.Form>
            <Player.ContainerRow>

                <Filter title="Time A" />
                <Filter title="Time B" isActive/>

            </Player.ContainerRow>


        </Player.Container>
    )
}