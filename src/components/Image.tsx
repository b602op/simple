import { css, CSSObject } from '@emotion/react';

type ImageProps ={
    src: string,
    ownStyles: CSSObject,
    type: 's' | 'm' | 'l' | 'xl',
}

export const Image: React.FC<ImageProps> = ({ src, type, ownStyles }: ImageProps) => {

    return <img css={css({...ownStyles})} src={src}></img>
}