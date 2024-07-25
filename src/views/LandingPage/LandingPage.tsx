import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    CoolFont,
    MediumText,
    Row,
    ShakeWrapper
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

    console.log('no secrets here', new Date());

    return (
        <Container>
            <Column $maxWidth $maxHeight>
                <Title>Hey gamer</Title>
                <CoolFont>what's good</CoolFont>
                <GradientBackground>
                    <YeaContainer>
                        <YeaText yeaCount={yeaCount} />
                    </YeaContainer>
                    <Row $centered $gap={50}>
                        {yeaCount < MAX_YEA ? (
                            <>
                                <YeaAnchor onClick={handleOnYea}>yea</YeaAnchor>
                                <StyledLink to="/cringe" onClick={handleOnNah}>
                                    nah
                                </StyledLink>
                            </>
                        ) : (
                            <>
                                <SpeechBubble>
                                    <ShakeWrapper $shakeSpeed={0.25}>
                                        <TBDText>
                                            then come on down to tbd!!!!
                                        </TBDText>
                                    </ShakeWrapper>
                                </SpeechBubble>
                                <SpeechBubbleLinksContainer>
                                    <StyledLink
                                        to="/info"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        what's that???
                                    </StyledLink>
                                    <StyledLink
                                        to="/cringe"
                                        onClick={handleOnNah}
                                    >
                                        nah
                                    </StyledLink>
                                </SpeechBubbleLinksContainer>
                            </>
                        )}
                    </Row>
                </GradientBackground>
            </Column>
            {yeaCount > 0 ? (
                <Image $visibilityStage={yeaCount} src={FullMika} />
            ) : null}
        </Container>
    );
};

const GradientBackground = styled.div`
    background: linear-gradient(
        90deg,
        rgba(38, 0, 103, 1) 0%,
        rgba(5, 0, 174, 1) 47%,
        rgba(85, 0, 255, 1) 100%
    );
`;

const SpeechBubbleLinksContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 45%;
    display: flex;
    gap: 30px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: courier;
    font-size: 3em;
    color: ${COLORS.lightPurple};
    padding: 0.5em 1em;
    margin: 1em;
    border: 5px solid ${COLORS.lightPurple};
    z-index: 1;
`;

const YeaContainer = styled(Column)`
    width: 50%;
    margin: auto;
`;

const YeaAnchor = styled.a`
    :hover {
        cursor: pointer;
    }
    text-decoration: none;
    font-family: courier;
    font-size: 3em;
    color: ${COLORS.lightPurple};
    padding: 0.5em 1em;
    border: 5px solid ${COLORS.lightPurple};
    z-index: 1;
`;

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
    left: 35%;
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
    background: ${COLORS.darkBlue};
    margin: -8px;
    overflow: none;
`;

const Image = styled.img<{ $visibilityStage: number }>`
    position: fixed;
    top: ${({ $visibilityStage }) =>
        css`calc(100% - ${$visibilityStage} * 40% + 40%)`};
    transition: all 1s;
    transition-timing-function: ease-out;
    overflow: none;
`;

const Title = styled(BigText)`
    display: flex;
    justify-content: center;
    font-family: Impact;
    color: ${COLORS.darkPurple};
    text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
        -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
        1px 1px 0px #000, -2px -2px 0px #000, -1px -2px 0px #000,
        0px -2px 0px #000, 1px -2px 0px #000, 2px -2px 0px #000,
        2px -1px 0px #000, 2px 0px 0px #000, 2px 1px 0px #000, 2px 2px 0px #000,
        1px 2px 0px #000, 0px 2px 0px #000, -1px 2px 0px #000, -2px 2px 0px #000,
        -2px 1px 0px #000, -2px 0px 0px #000, -2px -1px 0px #000;
`;

const HeroText = styled(MediumText)`
    font-family: courier;
    display: flex;
    justify-content: center;
    color: ${COLORS.cool};
    width: 99%;
    padding: 2em 0em;
`;
