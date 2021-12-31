import { css, CSSObject } from '@emotion/react';

type RowProps = {
    children: React.ReactNode | React.ReactNodeArray;
    align?: 'top' | 'center' | 'bottom'; 
    ownStyles?: CSSObject;
    onBlur?: (e: React.FocusEvent<Element>) => void;
};

const row = `
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
`;

const aligns = {
    top: `align-items: flex-start;`,
    center: `align-items: center;`,
    bottom: `align-items: flex-end;`,
};

export const Row: React.FC<RowProps> = ({ children, ownStyles, align = 'center', onBlur }: RowProps) => {
    const composedStyles: CSSObject = {
        display: 'flex',
        flexWrap: 'wrap',
        flex: '1 1 auto',
        alignItems: aligns[align],
        ...ownStyles,
    };

    return (
    <div css={css(composedStyles)} onBlur={onBlur}>
        {children}
    </div>
)};

export default Row;
