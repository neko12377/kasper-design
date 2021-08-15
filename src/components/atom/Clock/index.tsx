import React, {useCallback, useMemo, useRef, useState} from "react";
import styled from "styled-components";

interface CircleProps {
    diameter?: number;
    background?: string;
    middleCircle?: number;
}

const OuterClock = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.diameter ? props.diameter * 1.35 : 467}px;
  height: ${props => props.diameter ? props.diameter * 1.35 : 467}px;
  background: ${props => props.background ?? "#091921"};
  border-radius: 50%;
`

const ClockWrapper = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.diameter ? props.diameter * 1.2 : 420}px;
  height: ${props => props.diameter ? props.diameter * 1.2 : 420}px;
  border-radius: 50%;
  background: ${props => props.background ?? "#091921"};;
  border: solid 8px ${props => props.background ?? "#091921"};
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
  inset 0 -15px 15px rgba(255, 255, 255, 0.05),
  0 15px 15px rgba(0, 0, 0, 0.3),
  inset 0 15px 15px rgba(0, 0, 0, 0.3);
`;

const StyledClock = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.diameter ?? 350}px;
  height: ${props => props.diameter ?? 350}px;
  position: relative;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    width: ${props => props.middleCircle ?? 15}px;
    height: ${props => props.middleCircle ?? 15}px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;

  }
`

interface StyleHandsProps {
    degree?: number;
}

const StyledHands = styled.div<StyleHandsProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

const StyledHourHand = styled(StyledHands)`
  width: 40%;
  height: 40%;
  transform: rotate(${props => props.degree ?? 0}deg);

  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 50%;
    background: #e8386a;
    border-radius: 6px;
  }
`

const StyledMinuteHand = styled(StyledHands)`
  width: 75%;
  height: 75%;
  transform: rotate(${props => props.degree ?? 0}deg);

  &::before {
    position: absolute;
    content: "";
    width: 4px;
    height: 50%;
    background: #f0f0f0;
    border-radius: 6px;
  }
`

const StyledSecondHand = styled(StyledHands)`
  width: 90%;
  height: 90%;
  transform: rotate(${props => props.degree ?? 0}deg);

  &::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 65%;
    background: #2d6799;
    border-radius: 6px;
  }
`

interface ClockNumberProps {
    top: number;
    left: number;
    numberSize?: number;
}

const ClockNumber = styled.div<ClockNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 10%;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  color: #f0f0f0;
  font-size: ${props => props.numberSize ?? 2}rem;
`;

export interface ClockProps extends CircleProps {
    numberSize?: number;
}

export const Clock = React.memo((props: ClockProps) => {
    const diameter = props.diameter ?? 350;
    const radius = diameter / 2;
    const numberSize = diameter / 10;
    const radian = (degree: number) => degree * 2 * Math.PI / 360;
    const clockNumberList = Array.from(new Array(12)).map((item, index) => {
        const clockNumber = index + 1
        const deg = 30 * (clockNumber);
        const degree = useMemo(() => {
            return deg <= 90 ? deg
                : deg <= 180
                    ? 180 - deg
                    : deg <= 270
                        ? deg - 180
                        : 360 - deg;
        }, [index]);
        // calculate coordinates for numbers where it should be placed inside the clock.
        const numberSideDegree = (180 - degree) / 2;
        const sinLength = Math.sin(radian(degree)) * radius / Math.sin(radian(numberSideDegree));
        const left = () => {
            const position = sinLength / Math.sin(radian(90)) * Math.sin(radian(numberSideDegree));
            return clockNumber <= 6 ? position + diameter / 2 - numberSize / 2 : diameter / 2 - numberSize / 2 - position;
        };
        const top = () => {
            const position = sinLength / Math.sin(radian(90)) * Math.sin(radian(90 - numberSideDegree));
            return clockNumber > 3 && clockNumber < 9 ? diameter - position - numberSize / 2 : position - numberSize / 2;
        };
        return <ClockNumber key={clockNumber + "o'clock"} top={top()} left={left()} numberSize={props.numberSize}>{index + 1}</ClockNumber>
    });

    const hourHandDegrees = useRef(0);
    const minuteHandDegrees = useRef(0);
    const [secondHandDegrees, setSecondHandDegrees] = useState(0);

    const setHandsDegrees = useCallback(() => setTimeout(() => {
        console.info(12345);
        const day = new Date();
        const hourDegrees = day.getHours() * 30;
        const minuteDegrees = day.getMinutes() * 6;
        const secondDegrees = day.getSeconds() * 6;
        hourHandDegrees.current = hourDegrees + minuteDegrees / 12;
        minuteHandDegrees.current = minuteDegrees;
        setSecondHandDegrees(secondDegrees);
    }, 1000), [])
    setHandsDegrees()
    return (
        <OuterClock diameter={diameter} background={props.background}>
            <ClockWrapper diameter={diameter} background={props.background}>
                <StyledClock diameter={diameter} middleCircle={props.middleCircle}>
                    {clockNumberList}
                    <StyledHourHand degree={hourHandDegrees.current} />
                    <StyledMinuteHand degree={minuteHandDegrees.current} />
                    <StyledSecondHand degree={secondHandDegrees} />
                </StyledClock>
            </ClockWrapper>
        </OuterClock>
    )
})