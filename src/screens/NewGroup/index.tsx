import { Header } from '@components/Header';
import * as NewGroupComponents from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

export function NewGroup() {
    return(
        <NewGroupComponents.Container>
            <Header showBackButton />
            <NewGroupComponents.Content>
                <NewGroupComponents.Icon />
                <Highlight 
                title='Nova turma' 
                subtitle='crie a turma para adicionar pessoas'/>
                <Button title="Cadastrar turma"/>
            </NewGroupComponents.Content>
        </NewGroupComponents.Container>
    )
}