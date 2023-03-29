import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    HugeText,
    Row,
    SmallText
} from '../utils/components';
import FullMika from '../assets/FullMika.png';

interface IProps {
    backgroundSong: HTMLAudioElement;
}

const MAX_YEA = 3;

const YeaText: React.FC<{ yeaCount: number }> = ({ yeaCount }) => {
    if (yeaCount === 1) {
        return <HeroText>you live in toronto (or close by)??</HeroText>;
    }
    if (yeaCount === 2) {
        return <HeroText>you're interested in local events???</HeroText>;
    }
    if (yeaCount >= MAX_YEA) {
        return <HeroText>then come on down to tbd!!!!</HeroText>;
    }

    return <HeroText>you like french bread games?</HeroText>;
};

export const LandingPage: React.FC<IProps> = ({ backgroundSong }) => {
    const [backgroundSongIsPlaying, setBackgroundSongIsPlaying] =
        useState<boolean>(false);

    const [yeaCount, setYeaCount] = useState<number>(0);

    const handleOnYea = async () => {
        if (!backgroundSongIsPlaying) {
            backgroundSong.play();
            setBackgroundSongIsPlaying(true);
        }
        setYeaCount(yeaCount + 1);
        const response = await fetch(
            'https://api.challonge.com/v1/tournaments?api_key=0eDRIrJvJuC5alOArOMwVthajfmvdjiEWfv1b1T7',
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response);
    };

    const handleOnNah = () => {
        console.log('NAH');
        backgroundSong.pause();
    };

    return (
        <>
            <Column $maxWidth>
                <Title>Hey gamer</Title>
                <CoolFont>what's good</CoolFont>
                <YeaText yeaCount={yeaCount} />
                <Row $centered>
                    {yeaCount < MAX_YEA ? (
                        <button onClick={handleOnYea}>yea</button>
                    ) : (
                        <Link to="/info" style={{ textDecoration: 'none' }}>
                            whats that
                        </Link>
                    )}

                    <Link
                        to="/cringe"
                        onClick={handleOnNah}
                        style={{ textDecoration: 'none' }}
                    >
                        nah
                    </Link>
                </Row>
            </Column>
            <Image $visibilityStage={yeaCount} src={FullMika} />
            {yeaCount === 0 ? <SneakyText>shhhhhhhhhhhhh</SneakyText> : null}
        </>
    );
};

const SneakyText = styled(SmallText)`
    position: absolute;
    top: 130%;
    left: 35%;
`;

const Image = styled.img<{ $visibilityStage: number }>`
    position: absolute;
    top: ${({ $visibilityStage }) =>
        css`calc(100% - ${$visibilityStage} * 25%)`};
    transition: all 1s;
    transition-timing-function: ease-out;
    overflow-y: hidden;
`;

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
