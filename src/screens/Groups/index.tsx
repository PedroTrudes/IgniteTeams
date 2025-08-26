import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import * as Group from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootParamList = {
        groups: undefined;
        new: undefined;
        players: {
            group: string;
    }
}

type Props = {
    navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
}

export function Groups({navigation}: Props) {
    const [groups, setGroups] = useState<string[]>([]);
    //const navigation = useNavigation();

    function handleNewGroup () {
        navigation.navigate('new');
    }

    return(
        <Group.Container>
            <Header />
            <Group.Title>Ignite Teams</Group.Title>
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
            showsVerticalScrollIndicator={false}
            
            />
            <Button 
            title="Criar nova turma"
            type="PRIMARY"
            onPress={handleNewGroup}
            />

        </Group.Container>
     
    )
}

