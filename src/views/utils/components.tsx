import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export enum COLORS {
    darkBlue = '#003da8',
    cool = '#8CF5F9',
    red = '#DC143C',
    orange = '#c75600',
    darkPurple = '#610095',
    lightPurple = '#f4deff',
    darkGray = '#5a5a5a'
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

export const Row = styled.div<{
    $centered?: boolean;
    $maxWidth?: boolean;
    $maxHeight?: boolean;
    $gap?: number;
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
                  height: 100vh;
              `
            : ''};
    ${({ $gap }) =>
        $gap
            ? css`
                  gap: ${$gap}px;
              `
            : ''};
`;

export const Column = styled(Row)`
    flex-direction: column;
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

export const ShakeWrapper = styled.div<{ $shakeSpeed?: number }>`
    animation: shake
        ${({ $shakeSpeed }) =>
            $shakeSpeed
                ? css`
                      ${$shakeSpeed}s
                  `
                : css`3s`};
    animation-iteration-count: infinite;

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }
`;
