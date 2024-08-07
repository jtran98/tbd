import styled from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    CoolFont,
    MediumText,
    Row,
    SmallText
} from '../utils/components';

import TheLadies from '../assets/TheLadies.png';
import Kouma from '../assets/Kouma.png';
import Knuckles from '../assets/Knuckles.png';

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
            {/**shouldShowMoreInfo ? (
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
            ) : null */}
            {shouldShowMoreInfo ? (
                <MoreInfoContainer>
                    <MoreInfoText>pee pee poo poo</MoreInfoText>
                    <MoreInfoText>no locals right now to go to</MoreInfoText>
                    <Spacer />
                    <MoreInfoText>
                        check out: <StyledCoolFont>Stun City</StyledCoolFont>{' '}
                        and <StyledCoolFont>Incendium</StyledCoolFont> for
                        weekly/monthly events
                    </MoreInfoText>
                    <Spacer />
                    <MoreInfoButton
                        onClick={() => {
                            setShouldShowMoreInfo(false);
                        }}
                    >
                        oh ok
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
                <MoreInfoButton
                    onClick={() => {
                        setShouldShowMoreInfo(true);
                    }}
                >
                    sounds cool, more info please
                </MoreInfoButton>

                <Spacer />
                <DiscordAnchor
                    href="https://discord.gg/beesKMsNF3"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the east canada french bread discord&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/xxrhmq8"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the montreal air dashers discord&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/QmKRhtx82u"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the saguenay discord&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href=" https://discord.gg/z9Dv8jYdqY"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the ottawa discord and get a free shawarma
                    (lie)&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/fSeMcwF"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;join the windsor discord&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/af5GEktdkU"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;L O N D O N&lt; <Spacer>O</Spacer>
                    <Spacer>N</Spacer>
                    <Spacer>D</Spacer>
                    <Spacer>O</Spacer>
                    <Spacer>N</Spacer>
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.com/invite/4jXNxXm"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;Incendium (Toronto)&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/6qdRAqwdgF"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;Toronto Top Tiers (Japan)&lt;
                </DiscordAnchor>
                <DiscordAnchor
                    href="https://discord.gg/fYYgAAC7J4"
                    target="_blank"
                    rel="noreferrer"
                >
                    &gt;waterPOO (last place for a reason)&lt;
                </DiscordAnchor>
            </MainContentContainer>
            <LadiesImage src={TheLadies} />
            <KoumaImage src={Kouma} />
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

const StyledCoolFont = styled(CoolFont)`
    padding: 1em;
    font-size: 1em;
`;
