import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export enum COLORS {
    cool = '#8CF5F9',
    orange = '#c75600',
    darkPurple = '#610095',
    lightPurple = '#f4deff'
}

export const HugeText = styled.div<{ $font?: string }>`
    font-size: 7em;
    ${({ $font }) =>
        $font
            ? css`
                  font-family: ${$font};
              `
            : ''}
`;

export const BigText = styled.div<{ $font?: string }>`
    font-size: 5em;
    ${({ $font }) =>
        $font
            ? css`
                  font-family: ${$font};
              `
            : ''}
`;

export const MediumText = styled.div<{ $font?: string }>`
    font-size: 3em;
    ${({ $font }) =>
        $font
            ? css`
                  font-family: ${$font};
              `
            : ''}
`;

export const SmallText = styled.div<{ $font?: string }>`
    font-size: 2em;
    ${({ $font }) =>
        $font
            ? css`
                  font-family: ${$font};
              `
            : ''}
`;

export const Column = styled.div<{
    $centered?: boolean;
    $maxWidth?: boolean;
    $maxHeight?: boolean;
}>`
    display: flex;
    flex-direction: column;

    ${({ $centered }) =>
        $centered
            ? css`
                  justify-content: center;
                  align-items: center;
              `
            : ''};

    ${({ $maxWidth }) =>
        $maxWidth
            ? css`
                  width: 100%;
              `
            : ''};

    ${({ $maxHeight }) =>
        $maxHeight
            ? css`
                  height: 100%;
              `
            : ''};
`;

export const Row = styled.div<{
    $centered?: boolean;
    $maxWidth?: boolean;
    $maxHeight?: boolean;
}>`
    display: flex;
    flex-direction: row;
    ${({ $centered }) =>
        $centered
            ? css`
                  justify-content: center;
                  align-items: center;
              `
            : ''};

    ${({ $maxWidth }) =>
        $maxWidth
            ? css`
                  width: 100%;
              `
            : ''};

    ${({ $maxHeight }) =>
        $maxHeight
            ? css`
                  height: 100%;
              `
            : ''};
`;

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
