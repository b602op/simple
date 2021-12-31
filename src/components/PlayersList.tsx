import { allPlayers } from "../App"
import { Button } from "./Button"
import { Row } from "./Row";

type PlayersListProps = {
    currentPlayers: number[],
    addPlayer: (id: number) => void,
}

export const PlayersList: React.FC<PlayersListProps> = ({ currentPlayers, addPlayer }: PlayersListProps) => {
    const ownPlayers = allPlayers.filter(({ id }) => !currentPlayers.includes(id));

    const players = ownPlayers.map(({ name, id }) => (
            <Button onClick={() => addPlayer(id)}>{name}</Button>
    ));

    console.log(currentPlayers, ' currentPlayers')

    return (
        <>
            <Row ownStyles={{ justifyContent: 'center', marginBottom: '20px' }}>Выберите игоков:</Row>
            <Row ownStyles={{ justifyContent: 'space-evenly' }}>
                {players}
            </Row>
        </>
    )
}

export default PlayersList