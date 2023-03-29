import styled, { css } from 'styled-components';
import { BigText, Column, useWindowDimensions } from '../utils/components';

export const Cringe: React.FC = () => {
    const height = useWindowDimensions().height;

    // test to see if this properly boots people off the site
    // const history = useHistory();
    // useEffect(() => {
    //     setTimeout(() => history.push(document.referrer), 5000);
    // });
    return (
        <PageContainer $screenHeight={height} $maxWidth $centered>
            <BigText>cringe</BigText>
            <BigText>get out</BigText>
        </PageContainer>
    );
};

const PageContainer = styled(Column)<{ $screenHeight: number }>`
    ${({ $screenHeight }) =>
        css`
            height: calc(${$screenHeight}px * 0.9);
        `}
`;
