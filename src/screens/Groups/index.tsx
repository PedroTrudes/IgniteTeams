import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import * as Group from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['Galera da rocketseat', 'Icapara Futbool club']);

    return(
        <Group.Container>
            <Header />
            <Group.Title>Teste</Group.Title>
            <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>
            <FlatList 
                data={groups}
                style={{width: '100%'}}
                keyExtractor={item => item }
                renderItem={({item}) => (
                <GroupCard title={item} />
            )}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
            ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
            
            />

            

        </Group.Container>
     
    )
}

