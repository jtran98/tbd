import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    HugeText,
    Row,
    ShakeWrapper,
    SmallText
} from '../utils/components';
import FullMika from '../assets/FullMika.png';

interface IProps {
    backgroundSong: HTMLAudioElement;
}

const MAX_YEA = 3;

const YeaText: React.FC<{ yeaCount: number }> = ({ yeaCount }) => {
    if (yeaCount === 0) {
        return <HeroText>you like french bread games?</HeroText>;
    }
    if (yeaCount === 1) {
        return (
            <ShakeWrapper $shakeSpeed={1.5}>
                <HeroText>you live in toronto (or close by)??</HeroText>
            </ShakeWrapper>
        );
    }
    if (yeaCount === 2) {
        return (
            <ShakeWrapper $shakeSpeed={1}>
                <HeroText>you're interested in local events???</HeroText>
            </ShakeWrapper>
        );
    }

    return null;
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
    };

    const handleOnNah = () => {
        console.log('NAH');
        backgroundSong.pause();
    };

    return (
        <Container>
            <Column $maxWidth $maxHeight>
                <Title>Hey gamer</Title>
                <CoolFont>what's good</CoolFont>
                <YeaText yeaCount={yeaCount} />
                <Row $centered>
                    {yeaCount < MAX_YEA ? (
                        <button onClick={handleOnYea}>yea</button>
                    ) : (
                        <>
                            <SpeechBubble>
                                <ShakeWrapper $shakeSpeed={0.25}>
                                    <TBDText>
                                        then come on down to tbd!!!!
                                    </TBDText>
                                </ShakeWrapper>
                            </SpeechBubble>
                            <Link to="/info" style={{ textDecoration: 'none' }}>
                                whats that
                            </Link>
                        </>
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
        </Container>
    );
};

const TBDText = styled(BigText)`
    color: ${COLORS.cool};
`;

const SpeechBubble = styled.div`
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 0.8s ease-out;
    position: absolute;
    top: 30%;
    right: 10%;
    border-radius: 4em;
    background: ${COLORS.darkPurple};
    padding: 30px 100px;
    :after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 50px dotted transparent;
        border-right-color: ${COLORS.darkPurple};
        border-left: 0;
        border-bottom: 0;
        margin-top: 20px;
        margin-left: 0;
    }
    z-index: 1;
`;

const Container = styled.div`
    background: #003da8;
    margin: -8px;
`;

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
`;

const Title = styled(BigText)`
    display: flex;
    justify-content: center;
    font-family: Comic Sans MS, Comic Sans, cursive;
`;

const HeroText = styled(HugeText)`
    display: flex;
    justify-content: center;
    color: ${COLORS.cool};
    width: 99%;
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
