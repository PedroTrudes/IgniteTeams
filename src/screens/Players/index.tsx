import * as Player from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Players() {
    return(
        <Player.Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera aos times"/>
        </Player.Container>
    )
}