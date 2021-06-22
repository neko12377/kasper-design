import React, {useCallback, useState} from "react";
import styled from "styled-components";

const StyledMinuteTimer = styled.div`
    width: 155px;
    height: 44px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 60px;
    color: #8762d2;
`;

export interface MinuteTimerProps {
    leftTime: string;
}

export const MinuteTimer = React.memo((props: MinuteTimerProps) => {
    const [minute, second] = props.leftTime.split(":");
    const [currentMinute, setCurrentMinute] = useState(parseInt(minute));
    const [currentSecond, setCurrentSecond] = useState(parseInt(second));
    const countdown = useCallback(() => {
        const minuteCountdown = () => {
            currentMinute > 0 &&
                currentSecond === 0 &&
                setCurrentMinute(currentMinute - 1);
        };
        const secondCountdown = () => {
            currentMinute >= 0 &&
                currentSecond > 0 &&
                setCurrentSecond(currentSecond - 1);
            currentMinute > 0 && currentSecond === 0 && setCurrentSecond(59);
        };
        setTimeout(() => {
            minuteCountdown();
            secondCountdown();
        }, 1000);
    }, [currentSecond]);

    const formatTime = useCallback(() => {
        const minuteStr =
            currentMinute < 10
                ? "0" + currentMinute.toString()
                : currentMinute.toString();
        const secondStr =
            currentSecond < 10
                ? "0" + currentSecond.toString()
                : currentSecond.toString();
        return [minuteStr, secondStr];
    }, [currentMinute, currentSecond]);
    countdown();
    return (
        <StyledMinuteTimer>
            {formatTime()[0] + ":" + formatTime()[1]}
        </StyledMinuteTimer>
    );
});
