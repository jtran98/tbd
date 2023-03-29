import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, Column, Row } from '../utils/components';
import background from './assets/background.mp3';

interface IProps {
    isNah: boolean;
    setIsNah: (state: boolean) => void;
}

export const LandingPage: React.FC<IProps> = ({ isNah, setIsNah }) => {
    const backgroundSong = new Audio(background);
    backgroundSong.volume = 0.1;
    backgroundSong.loop = true;

    const handleOnYea = () => {
        backgroundSong.play();
        //backgroundSong.pause();
    };

    const handleOnNah = () => {
        setIsNah(true);
        backgroundSong.pause();
    };

    return (
        <>
            <Column $maxWidth>
                <Title>Hello gamer</Title>
                <CoolFont>what's good</CoolFont>
                <HeroText>you like french bread games???</HeroText>
                <Row $maxWidth $centered>
                    <button onClick={handleOnYea}>yea</button>
                    <button onClick={handleOnNah}>nah</button>
                </Row>
            </Column>
        </>
    );
};

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 86px;
`;

const HeroText = styled.div`
    font-size: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${COLORS.cool};
`;

const CoolFont = styled.div`
    text-align: center;
    text-decoration: underline;
    font-size: 32px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    letter-spacing: 5px;
    background: linear-gradient(
        to right,
        #6666ff,
        #0099ff,
        #00ff00,
        #ff3399,
        #6666ff
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 4.5s ease-in-out infinite;
    background-size: 400% 100%;

    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
`;
