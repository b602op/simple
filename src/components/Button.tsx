import { css, CSSObject } from "@emotion/react"

const buttonStyles = {
    default: {
        border: '0',
        borderRadius: '5px',
        padding: '8px 16px',
        background: '#4676D7',
        color: '#fff',
        cursor: 'pointer',

        ":hover": {
            background: '#1d49aa',
        }
    },
}

const buttonSizes = {
    s: {},
    m: {},
    l: {},
    xl: {},
}

type ButtonProps = {
    children: any,
    onClick: () => void,
    disabled?: boolean,
    ownStyles?: CSSObject,
    size?: keyof typeof buttonSizes,
    type?: keyof typeof buttonStyles,
}

export const Button: React.FC<ButtonProps> = ({ 
    children,
    onClick,
    disabled,
    type = 'default',
    size = 's',
    ownStyles = {}
}) => {

    const typeStyle = buttonStyles[type];

    const typeSize = buttonSizes[size];

    return <button css={css({...typeSize, ...typeStyle, ...ownStyles})} onClick={onClick} disabled={!!disabled}>{children}</button>
}