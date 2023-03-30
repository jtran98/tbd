import styled from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    MediumText,
    Row,
    SmallText
} from '../utils/components';

import TheLadies from '../assets/TheLadies.png';
import Kouma from '../assets/Kouma.png';
import Knuckles from '../assets/Knuckles.png';
import { ImageCarousel } from '../utils/ImageCarousel';

import Locals1 from '../assets/Locals1.jpg';
import Locals2 from '../assets/Locals2.jpg';
import { useState } from 'react';
interface IProps {
    backgroundSong: HTMLAudioElement;
}

export const WhatsThat: React.FC<IProps> = ({ backgroundSong }) => {
    const incentives: string[] = [
        'top 8 evo player',
        'goat vtuber',
        'kangel simps',
        '1 am weeb karaoke',
        'opportunities for dating',
        'standteching',
        "it's near a lot of food",
        'the bathrooms are clean',
        'jesus!!! (amen)'
    ];

    const [shouldShowMoreInfo, setShouldShowMoreInfo] =
        useState<boolean>(false);

    return (
        <Column $centered>
            {shouldShowMoreInfo ? (
                <MoreInfoContainer>
                    <MoreInfoText>
                        Location: St. Michael's College (Brennan Hall{' '}
                        <strong>East</strong>)
                    </MoreInfoText>
                    <MoreInfoText>
                        Senior Common Room 81A St Mary St, Toronto, ON, M5S 1J4
                    </MoreInfoText>
                    <MoreInfoText>
                        81A St Mary St, Toronto, ON, M5S 1J4
                    </MoreInfoText>
                    <Spacer />
                    <MoreInfoText> $10 venue fee, $5 per game</MoreInfoText>
                    <MoreInfoText>
                        Contact @Al_Rikir or @1mom69 for any questions
                    </MoreInfoText>
                    <Spacer />
                    <MoreInfoText>Date/Time: Monthly on Saturdays</MoreInfoText>
                    <MoreInfoText> 6:30PM - Doors open </MoreInfoText>
                    <MoreInfoText> 7:30PM - MBTL starts </MoreInfoText>
                    <MoreInfoText> 8:30PM - UNICLR starts</MoreInfoText>
                    <Spacer />
                    <MoreInfoButton
                        onClick={() => {
                            setShouldShowMoreInfo(false);
                        }}
                    >
                        ok thanks
                    </MoreInfoButton>
                </MoreInfoContainer>
            ) : null}

            <Row>
                <DescriptionText $font="courier">
                    TBD is a Toronto <FancyItalics>based</FancyItalics> locals
                    for french bread games
                </DescriptionText>
            </Row>
            <MainContentContainer>
                <Incentives>
                    why not check us out? we got:
                    {incentives.map(incentive => (
                        <IncentiveItem>{incentive}</IncentiveItem>
                    ))}
                    <KnucklesImage src={Knuckles} />
                </Incentives>
                {!shouldShowMoreInfo ? (
                    <MoreInfoButton
                        onClick={() => {
                            setShouldShowMoreInfo(true);
                        }}
                    >
                        sounds cool, more info please
                    </MoreInfoButton>
                ) : null}

                <Spacer />
                <DiscordAnchor
                    href="https://discord.gg/bqUwyNX"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the east canada french bread discord&lt;
                </DiscordAnchor>
            </MainContentContainer>
            <LadiesImage src={TheLadies} />
            <KoumaImage src={Kouma} />
            <ImageCarouselContainer>
                <ImageCarousel
                    labelText="the peeps (this could be you!!)"
                    children={[
                        <CarouselImage src={Locals1} alt="" />,
                        <CarouselImage src={Locals2} alt="" />
                    ]}
                />
            </ImageCarouselContainer>
        </Column>
    );
};

const MoreInfoContainer = styled(Column)`
    padding: 3em;
    border-radius: 1em;
    z-index: 1;
    position: absolute;
    top: 15%;
    background-color: ${COLORS.darkBlue};
    color: ${COLORS.cool};
`;

const MoreInfoText = styled(MediumText)`
    font-family: verdana;
`;

const Spacer = styled.div`
    padding: 20px;
`;

const MainContentContainer = styled(Column)`
    margin-top: 50px;
    margin-right: 450px;
`;

const MoreInfoButton = styled.button`
    :hover {
        cursor: pointer;
    }
    font-size: 3em;
    font-family: courier;
    background: ${COLORS.darkPurple};
    border: 5px solid ${COLORS.orange};
    color: ${COLORS.red};
    width: fit-content;
`;

const ImageCarouselContainer = styled(Column)`
    position: absolute;
    bottom: 10%;
    right: -10%;
    font-weight: bold;
    color: ${COLORS.orange};
`;

const CarouselImage = styled.img`
    width: 400px;
`;

const DescriptionText = styled(BigText)``;

const DiscordAnchor = styled.a`
    text-decoration: none;
    font-size: 2em;
    font-family: courier;
    color: ${COLORS.darkGray};
    font-weight: bold;
    width: fit-content;
`;

const FancyItalics = styled.span`
    font-style: italic;
    padding: 0 0.1em;
    background: -webkit-linear-gradient(
        ${COLORS.lightPurple},
        ${COLORS.darkPurple}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;

const Incentives = styled(SmallText)`
    font-family: courier;
    color: ${COLORS.red};
    font-weight: bold;
`;

const IncentiveItem = styled.div`
    &:nth-child(odd) {
        color: ${COLORS.cool};
        background: ${COLORS.orange};
    }
    color: ${COLORS.orange};
    background: ${COLORS.cool};
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    border-radius: 0.5rem;
    padding: 0.3rem 1.5rem;
    font-family: verdana;
`;

const LadiesImage = styled.img`
    position: absolute;
    transform: rotate(14deg);
    right: 40px;
    top: 190px;
    z-index: -1;
`;

const KoumaImage = styled.img`
    position: absolute;
    transform: rotate(70deg);
    left: -50px;
    top: 400px;
    width: 600px;
    z-index: -2;
`;

const KnucklesImage = styled.img`
    width: 300px;
`;
