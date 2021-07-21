import React, {useEffect, useState} from "react";
import styled from "styled-components";

interface StyledDescriptionGroupProps {
    stepSignSize?: number;
    barLength?: number;
    amountOfStep?: number;
    fontSize?: number;
}

const StyledDescriptionGroup = styled.div<StyledDescriptionGroupProps>`
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

type DescriptionGroupProps = {
    barLength?: number;
    descriptions?: string[];
    stepSigns?: string[];
    toDecideColor: (index: number) => string | undefined;
    fontSize?: number;
    stepSignSize?: number;
};

export const DescriptionGroup = (props: DescriptionGroupProps) => {
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
    return (
        <StyledDescriptionGroup
            stepSignSize={props.stepSignSize}
            barLength={props.barLength}
            amountOfStep={props.descriptions && props.descriptions.length}
            fontSize={props.fontSize}
        >
            {descriptions.map((description, index) => {
                return (
                    <StepDescription
                        key={"description_" + index}
                        fontSize={props.fontSize}
                        barLength={props.barLength}
                        amountOfStep={props.stepSigns && props.stepSigns.length}
                        stepSignSize={props.stepSignSize}
                        color={props.toDecideColor(index)}
                    >
                        {description}
                    </StepDescription>
                );
            })}
        </StyledDescriptionGroup>
    );
};
