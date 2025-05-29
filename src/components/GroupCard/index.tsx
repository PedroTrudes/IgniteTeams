import * as ComponentsCard from './styles';
import {TouchableOpacityProps} from 'react-native'

//criando uma uniao de tipos 
type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return(
        <ComponentsCard.Container {...rest}>
            <ComponentsCard.Icon />
            <ComponentsCard.Title>{title}</ComponentsCard.Title>
        </ComponentsCard.Container>

    )
}