import * as React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, SmallText } from './components';

const SCarouselWrapper = styled.div`
    display: flex;
`;

interface ICarouselSlide {
    active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
    flex: 0 0 auto;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: all 0.5s ease;
    width: 100%;
`;

interface ICarouselProps {
    currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
    display: flex;
    ${props =>
        props.currentSlide &&
        css`
            transform: translateX(-${props.currentSlide * 100}%);
        `};
    transition: all 0.5s ease;
`;

interface IProps {
    children: JSX.Element[];
    labelText?: string;
    labelFont?: string;
}

export const ImageCarousel: React.FC<IProps> = ({
    children,
    labelText,
    labelFont
}) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const activeSlide = children.map((slide, index) => (
        <SCarouselSlide active={currentSlide === index} key={index}>
            {slide}
        </SCarouselSlide>
    ));

    return (
        <div>
            <SCarouselWrapper>
                <SCarouselSlides currentSlide={currentSlide}>
                    {activeSlide}
                </SCarouselSlides>
            </SCarouselWrapper>
            <ButtonsWrapper>
                <CarouselButton
                    onClick={() => {
                        setCurrentSlide(
                            (currentSlide - 1 + activeSlide.length) %
                                activeSlide.length
                        );
                    }}
                >
                    &lt;-
                </CarouselButton>
                <CarouselButton
                    onClick={() => {
                        setCurrentSlide(
                            (currentSlide + 1) % activeSlide.length
                        );
                    }}
                >
                    -&gt;
                </CarouselButton>
            </ButtonsWrapper>
            {labelText ? (
                <LabelText $labelFont={labelFont}>{labelText}</LabelText>
            ) : null}
        </div>
    );
};

const LabelText = styled.div<{
    $labelFont?: string;
}>`
    font-size: 1.5em;
    margin-left: 0%;
    font-family: ${({ $labelFont }) =>
        $labelFont
            ? css`
                  ${$labelFont};
              `
            : css`courier`};
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 280px;
`;

const CarouselButton = styled.button`
    border-radius: 50px;
    background: ${COLORS.darkGray};
    color: ${COLORS.lightPurple};
    font-family: verdana;
    font-size: 2em;
`;
