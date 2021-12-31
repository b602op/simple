import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { css, CSSObject } from '@emotion/react';

import { Page1 } from './Pages/Page1';
import { Page2 } from './Pages/Page2';

// import Lexa from './static/lexa.png';

const test: CSSObject = {
    backgroundColor: "green",
    textAlign: 'left',
    color: '#FFF',
}

export type OptionTypes = {
    players: number[],
}

export const allPlayers = [
    {   
        id: 1,
        name: 'Леха',
        src: '',
    },
    {
        id: 2,
        name: 'Вика',
        src: '',
    },
    {
        id: 3,
        name: 'Настя',
        src: '',
    },
    {
        id: 4,
        name: 'Серега',
        src: '',
    },
    {
        id: 5,
        name: 'Никита',
        src: '',
    },
    {
        id: 6,
        name: 'Валя',
        src: '',
    },
    {
        id: 7,
        name: 'Эдик',
        src: '',
    },
]

const defaultOptions: OptionTypes = {
    players: [],
}

export const App = () => {
    const [options, setOptions] = useState(defaultOptions)

    return (
        <>
            <h1 css={css(test)}>С новым годом ёпта!</h1>
            {/* <Link to='/'>Page1</Link>
            <Link to='/page2'>Page2</Link> */}
            <Routes>
                <Route path="/" element={<Page1 options={options} onChangeOptions={setOptions} />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </>
    )
}

export default App;