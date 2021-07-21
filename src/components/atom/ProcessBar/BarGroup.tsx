import React from "react";
import styled from "styled-components";

interface StyledBarGroupProps {
    stepSignSize?: number;
}

const StyledBarGroup = styled.div<StyledBarGroupProps>`
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

interface StyledStepSectionProps {
    backgroundColor?: string;
    shape?: string;
    size?: number;
    color?: string;
    fontSize?: number;
    description?: string;
}

const StyledStepSection = styled.div<StyledStepSectionProps>`
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

interface StyledBarSectionProps {
    color?: string;
    barLength?: number;
    height?: number;
    stepSectionSize?: number;
    distanceToMoveLeft?: number;
    gradientColor?: (string | undefined)[];
}

const StyledBarSection = styled.div<StyledBarSectionProps>`
    width: ${props => props.barLength ?? 150}px;
    height: ${props => props.height ?? 3}px;
    background-image: linear-gradient(
        to right,
        ${props => props.gradientColor?.[0]} 0%,
        ${props => props.gradientColor?.[1]} 30%,
        ${props => props.gradientColor?.[0]} 80%,
        ${props => props.gradientColor?.[2]}
    );
`;

interface BarGroupProps {
    stepSignSize?: number;
    stepSigns: string[];
    fontSize?: number;
    toDecideColor: (index: number) => string | undefined;
    barLength?: number;
    barHeight?: number;
    toDecideGradientColor: (index: number) => (string | undefined)[];
}

export const BarGroup = (props: BarGroupProps) => {
    return (
        <StyledBarGroup stepSignSize={props.stepSignSize}>
            {props.stepSigns &&
                props.stepSigns.map((stepSign, index) => {
                    return index < props.stepSigns.length - 1 ? (
                        <StepSignAndBarGroup key={"step_" + index}>
                            <StyledStepSection
                                size={props.stepSignSize}
                                fontSize={props.fontSize}
                                backgroundColor={props.toDecideColor(index)}
                            >
                                {stepSign}
                            </StyledStepSection>
                            <StyledBarSection
                                barLength={props.barLength}
                                height={props.barHeight}
                                gradientColor={props.toDecideGradientColor(
                                    index
                                )}
                            />
                        </StepSignAndBarGroup>
                    ) : (
                        <StepSignAndBarGroup key={"step_" + index}>
                            <StyledStepSection
                                size={props.stepSignSize}
                                backgroundColor={props.toDecideColor(index)}
                            >
                                {stepSign}
                            </StyledStepSection>
                        </StepSignAndBarGroup>
                    );
                })}
        </StyledBarGroup>
    );
};
