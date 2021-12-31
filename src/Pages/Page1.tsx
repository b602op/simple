import { OptionTypes } from "../App";
import PlayersList from "../components/PlayersList";

type Page1Props = {
    options: OptionTypes,
    onChangeOptions: (options: OptionTypes) => void,
}

export const Page1 = ({ options, onChangeOptions }: Page1Props) => {
    const handleChangeOptions = (id: number) => {
        onChangeOptions({
            ...options,
            players: [...options.players, id]
        })
    }

    return (
        <PlayersList currentPlayers={options.players} addPlayer={handleChangeOptions} />
    )
}

export default Page1;