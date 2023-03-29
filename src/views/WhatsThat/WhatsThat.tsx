import styled from 'styled-components';
import { BigText, COLORS, Column, Row, SmallText } from '../utils/components';

import TheLadies from '../assets/TheLadies.png';
import Kouma from '../assets/Kouma.png';
import Knuckles from '../assets/Knuckles.png';
import { ImageCarousel } from '../utils/ImageCarousel';

interface IProps {
    backgroundSong: HTMLAudioElement;
}

export const WhatsThat: React.FC<IProps> = ({ backgroundSong }) => {
    const incentives: string[] = [
        'top 8 evo player',
        'vtuber',
        'kangel simps',
        '1 am weeb karaoke',
        'opportunities for dating',
        'standteching',
        'its near alot of food',
        'the bathrooms are clean',
        'jesus!!! (amen)'
    ];

    return (
        <Column $centered>
            <Row>
                <BigText>
                    TBD is a Toronto <FancyItalics>based</FancyItalics> locals
                    for french bread games
                </BigText>
            </Row>
            <Incentives>
                why not check us out? we got:
                {incentives.map(incentive => (
                    <IncentiveItem>{incentive}</IncentiveItem>
                ))}
                <KnucklesImage src={Knuckles} />
            </Incentives>
            <a
                href="https://discord.gg/bqUwyNX"
                target="_blank"
                rel="noreferrer"
            >
                join the discord for more information
            </a>
            <LadiesImage src={TheLadies} />
            <KoumaImage src={Kouma} />
            the peeps
            <ImageCarousel />
        </Column>
    );
};

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

const Incentives = styled(SmallText)``;

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
`;

const LadiesImage = styled.img`
    position: absolute;
    transform: rotate(14deg);
    right: 40px;
    top: 90px;
    z-index: -1;
`;

const KoumaImage = styled.img`
    position: absolute;
    transform: rotate(70deg);
    left: -100px;
    top: 300px;
    width: 700px;
    z-index: -2;
`;

const KnucklesImage = styled.img`
    width: 300px;
`;
