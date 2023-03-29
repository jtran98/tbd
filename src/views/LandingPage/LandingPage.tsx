import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    HugeText,
    Row,
    SmallText
} from '../utils/components';
import background from './assets/background.mp3';

const YeaText: React.FC<{ yeaCount: number }> = ({ yeaCount }) => {
    if (yeaCount === 1) {
        return <HeroText>you live in toronto (or close by)???</HeroText>;
    }
    return <HeroText>you like french bread games???</HeroText>;
};

export const LandingPage: React.FC = () => {
    const backgroundSong = new Audio(background);
    backgroundSong.volume = 0.1;
    backgroundSong.loop = true;

    const [backgroundSongIsPlaying, setBackgroundSongIsPlaying] =
        useState<boolean>(false);

    const [yeaCount, setYeaCount] = useState<number>(0);

    const handleOnYea = () => {
        console.log(backgroundSong.paused);
        if (!backgroundSongIsPlaying) {
            backgroundSong.play();
            setBackgroundSongIsPlaying(true);
        }
        setYeaCount(yeaCount + 1);
    };

    const handleOnNah = () => {
        backgroundSong.pause();
    };

    return (
        <>
            <Column $maxWidth>
                <Title>Hello gamer</Title>
                <CoolFont>what's good</CoolFont>
                <YeaText yeaCount={yeaCount} />
                <Row $centered>
                    <button onClick={handleOnYea}>yea</button>
                    <Link to="/cringe" onClick={handleOnNah}>
                        nah
                    </Link>
                </Row>
            </Column>
        </>
    );
};

const Title = styled(BigText)`
    display: flex;
    justify-content: center;
    font-family: Comic Sans MS, Comic Sans, cursive;
`;

const HeroText = styled(HugeText)`
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${COLORS.cool};
`;

const CoolFont = styled(SmallText)`
    text-align: center;
    text-decoration: underline;
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
