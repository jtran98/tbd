import styled, { css } from 'styled-components';
import { COLORS } from './utils/consts';

export const LandingPage: React.FC<{}> = () => {
    return (
        <>
            <div>
                <Title>Henlo gamr</Title>
                <CoolFont>what's good</CoolFont>
            </div>
        </>
    );
};

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 86px;
    font-weight: bold;
    color: ${COLORS.cool};
    width: 100%;
`;

const CoolFont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

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
    animation: rainbow_animation 6s ease-in-out infinite;
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
