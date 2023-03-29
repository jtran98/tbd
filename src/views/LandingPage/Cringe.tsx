import styled, { css } from 'styled-components';
import {
    BigText,
    COLORS,
    Column,
    useWindowDimensions
} from '../utils/components';
import Bonk from '../assets/Bonk.gif';

export const Cringe: React.FC = () => {
    const height = useWindowDimensions().height;
    console.log(height);

    // test to see if this properly boots people off the site
    // const history = useHistory();
    // useEffect(() => {
    //     setTimeout(() => history.push(document.referrer), 5000);
    // });
    return (
        <PageBackground $maxWidth $maxHeight $centered>
            <Container>
                <CringeText $screenHeight={height}>
                    <div>cringe</div>
                    <div>get out</div>
                </CringeText>
            </Container>
        </PageBackground>
    );
};

const CringeText = styled(BigText)<{ $screenHeight: number }>`
    background: ${COLORS.cool};
    padding: 200px 500px;
    ${({ $screenHeight }) =>
        css`
            margin-top: calc(${$screenHeight}px * 0.3);
        `};
`;

const PageBackground = styled(Column)`
    background-image: url(${Bonk});
    background-repeat: repeat;
    width: 101%;
    z-index: -1;
    margin: -8px;
`;

const Container = styled(Column)`
    height: 100vh;
`;
