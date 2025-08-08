import { useState } from "react";
import {FlatList} from "react-native";
import * as Player from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(["Pedro Joaquim", "Joao", "Paulo", "Julio", "Caio", "Enzo", "papa", "Thiago", "Thi"]);

    return(
        <Player.Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="Adicione a galera aos times"/>
            <Player.Form>
                <Input placeholder="Nome da pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" type="PRIMARY" />
            </Player.Form>

            <Player.ContainerRow>
                <FlatList 
                data={['Time A', 'Time B', 'Time C']} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter 
                    title={item} 
                    isActive={item === team} 
                    onPress={() => setTeam(item)}
                    />
                )}
                horizontal={true}
                />
                <Player.NumberOfPlayers>{players.length}</Player.NumberOfPlayers>
            </Player.ContainerRow>

            <FlatList 
            data={players}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom: 100}, players.length === 0 && { flex: 1}
            ]}
            renderItem={({item}) => (
                <PlayerCard name={item} onRemove={ () => { }}/>
            )}
            ListEmptyComponent={() => (
                <ListEmpty message="Não há pessoas nesse time"/>
            )}
            />
            
            <Button 
            title="Remover turma"
            type="SECUNDARY"
            />


        </Player.Container>
    )
}