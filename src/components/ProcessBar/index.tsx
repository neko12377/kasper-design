import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";

interface StyledProcessBarProps {
    width?: number;
    stepSignSize?: number;
    fontSize?: number;
}

const StyledProcessBar = styled.div<StyledProcessBarProps>`
    width: ${props => props.width ?? 538}px;
    height: ${props =>
    props.stepSignSize && props.fontSize
        ? props.stepSignSize + props.fontSize + 10
        : 46}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

interface DescriptionGroupProps {
    stepSignSize?: number;
    barLength?: number;
    amountOfStep?: number;
    fontSize?: number;
}

const DescriptionGroup = styled.div<DescriptionGroupProps>`
    width: ${props =>
    props.amountOfStep && props.barLength && props.stepSignSize
        ? props.stepSignSize * props.amountOfStep +
        props.barLength * (props.amountOfStep - 1) +
        props.barLength
        : 688}px;
    height: ${props => (props.fontSize ? props.fontSize + 10 : 24)}px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
`;

interface StepDescriptionProps {
    fontSize?: number;
    barLength?: number;
    color?: string;
    amountOfStep?: number;
    stepSignSize?: number;
}

const StepDescription = styled.div<StepDescriptionProps>`
    width: ${props =>
    props.amountOfStep && props.barLength && props.stepSignSize
        ? (props.stepSignSize * props.amountOfStep +
        props.barLength * (props.amountOfStep - 1) +
        props.barLength) /
        props.amountOfStep
        : 172}px;
    height: ${props => props.fontSize ?? 14}px;
    font-size: ${props => props.fontSize ?? 14}px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color ?? "#36a9fb"};
`;

interface BarGroupProps {
    stepSignSize?: number;
}

const BarGroup = styled.div<BarGroupProps>`
    width: 100%;
    height: ${props => props.stepSignSize ?? 22}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StepSignAndBarGroup = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

interface StyledProcessBarStepSectionProps {
    backgroundColor?: string;
    shape?: string;
    size?: number;
    color?: string;
    fontSize?: number;
    description?: string;
}

const StyledProcessBarStepSection = styled.div<StyledProcessBarStepSectionProps>`
    width: ${props => props.size ?? 22}px;
    height: ${props => props.size ?? 22}px;
    border-radius: ${props => (props.shape === "square" ? "2px" : "50%")};
    background-color: ${props => props.backgroundColor ?? "#36a9fa"};
    color: ${props => props.color ?? "white"};
    font-size: ${props => props.fontSize ?? 14}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface StyledProcessBarBarSectionProps {
    backgroundColor?: string;
    color?: string;
    width?: number;
    height?: number;
    stepSectionSize?: number;
    distanceToMoveLeft?: number;
}

const StyledProcessBarBarSection = styled.div<StyledProcessBarBarSectionProps>`
    width: ${props => props.width ?? 150}px;
    height: ${props => props.height ?? 2}px;
    background-color: ${props => props.backgroundColor ?? "#36a9fa"};
`;

interface ProcessBarProps {
    width?: number;
    stepsSign?: string[];
    completeSign?: string;
    descriptions?: string[];
    fontSize?: number;
    stepSignSize?: number;
}

export const ProcessBar = React.memo((props: ProcessBarProps) => {
    const [descriptions, setDescriptions] = useState<string[]>([
        "步驟一",
        "步驟二",
        "步驟三四五六七八九十",
        "完成",
    ]);

    useEffect(() => {
        setDescriptions(
            props.descriptions ?? [
                "步驟一",
                "步驟二",
                "步驟三四五六七八九十",
                "完成",
            ]
        );
    }, [props.descriptions]);

    const [stepsSign, setStepsSign] = useState<string[]>(["1", "2", "3"]);

    useEffect(() => {
        setStepsSign(props.stepsSign ?? ["1", "2", "3"]);
    }, [props.stepsSign]);

    const [completeSign, setCompleteSign] = useState<string>("✓");

    useEffect(() => {
        setCompleteSign(props.completeSign ?? "✓");
    }, [props.completeSign]);

    const [fontSize, setFontSize] = useState<number>(14);

    useEffect(() => {
        setFontSize(props.fontSize ?? 14);
    }, [props.fontSize]);

    const [barLength, setBarLength] = useState<number>(150);
    useEffect(() => {
        if (props.width && props.stepSignSize && props.stepsSign) {
            const barLength =
                (props.width -
                    props.stepSignSize * (props.stepsSign.length + 1)) /
                props.stepsSign.length;
            setBarLength(barLength);
        }
    }, [props.width, props.stepSignSize]);

    return (
        <StyledProcessBar
            width={props.width}
            stepSignSize={props.stepSignSize}
            fontSize={props.fontSize}
        >
            <DescriptionGroup
                stepSignSize={props.stepSignSize}
                barLength={barLength}
                amountOfStep={props.descriptions && props.descriptions.length}
                fontSize={props.fontSize}
            >
                {descriptions.map((description, index) => {
                    return (
                        <StepDescription
                            key={"description_" + index}
                            fontSize={props.fontSize}
                            barLength={barLength}
                            amountOfStep={
                                props.stepsSign && props.stepsSign.length
                            }
                            stepSignSize={props.stepSignSize}
                        >
                            {description}
                        </StepDescription>
                    );
                })}
            </DescriptionGroup>
            <BarGroup stepSignSize={props.stepSignSize}>
                {stepsSign &&
                stepsSign.map((stepsSign, index) => {
                    return (
                        <StepSignAndBarGroup key={"step_" + index}>
                            <StyledProcessBarStepSection
                                size={props.stepSignSize}
                                fontSize={props.fontSize}
                            >
                                {stepsSign}
                            </StyledProcessBarStepSection>
                            <StyledProcessBarBarSection width={barLength} />
                        </StepSignAndBarGroup>
                    );
                })}
                <StepSignAndBarGroup>
                    <StyledProcessBarStepSection size={props.stepSignSize}>
                        {completeSign}
                    </StyledProcessBarStepSection>
                </StepSignAndBarGroup>
            </BarGroup>
        </StyledProcessBar>
    );
});
