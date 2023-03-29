import styled from 'styled-components';
import { BigText, HugeText, Row } from '../utils/components';

interface IProps {
    backgroundSong: HTMLAudioElement;
}

export const WhatsThat: React.FC<IProps> = ({ backgroundSong }) => {
    const incentives: string[] = [
        'top 8 evo player',
        'vtuber',
        'kangel simps',
        '1 am karaoke parties'
    ];
    return (
        <>
            <Row>
                <BigText>
                    TBD is a Toronto <FancyItalics>based</FancyItalics> locals
                    for french bread games
                </BigText>
            </Row>
            <>we got: </>
            {incentives.map(incentive => (
                <div>{incentive}</div>
            ))}
        </>
    );
};

const FancyItalics = styled.span`
    font-style: italic;
    padding: 0 0.1em;
    background: -webkit-linear-gradient(#e5b3ff, #610095);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;
