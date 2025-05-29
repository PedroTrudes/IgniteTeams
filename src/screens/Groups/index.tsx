import { Header } from "@components/Header";
import * as Group from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
    return(
        <Group.Container>
            <Header />
            <Group.Title>Teste</Group.Title>
            <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>
            <GroupCard title="Galera Trudeslandia"/>
            <GroupCard title="Turma da Cheil"/>
        </Group.Container>
     
    )
}

