import { Header } from '@components/Header';
import * as NewGroupComponents from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
    return(
        <NewGroupComponents.Container>
            <Header showBackButton />
            <NewGroupComponents.Content>
                <NewGroupComponents.Icon />
                <Highlight 
                title='Nova turma' 
                subtitle='crie a turma para adicionar pessoas'/>
                <Input placeholder='Nome da turma' />
                <Button title="Cadastrar turma" style={{marginTop: 18}}/>
            </NewGroupComponents.Content>
        </NewGroupComponents.Container>
    )
}