import * as Head from './styles';
import logoImg from '@assets/logo.png';

export function Header() {
    return(
        <Head.Container>
            <Head.Logo source={logoImg}/>
        </Head.Container>
    )
}