import * as Empty from './styles';

type Props = {
    message: string
}

export function ListEmpty({message} : Props) {
    return(
        <Empty.Container>
            <Empty.Message>{message}</Empty.Message>
        </Empty.Container>
    )
}