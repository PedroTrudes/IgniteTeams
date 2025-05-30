import {TouchableOpacityProps} from 'react-native';
import * as Btn from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: Btn.ButtonTypeStyleProps;
}

export function Button({title, type = 'PRIMARY', ...rest} : Props) {
    return(
        <Btn.Container type={type} {...rest}>
            <Btn.Title>{title}</Btn.Title>
        </Btn.Container>
    )
}