import * as Head from './styles';
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false} : Props) {
    return(
        <Head.Container>
            {showBackButton && 
                <Head.BackButton >
                    <Head.BackIcon />
                </Head.BackButton>
            }
            <Head.Logo source={logoImg}/>
        </Head.Container>
    )
}