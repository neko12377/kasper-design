import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import {DescriptionGroup} from "./DescriptionGroup";
import {BarGroup} from "./BarGroup";

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
    @media screen and (max-width: 1024px) {
        width: ${props => props.width ?? 328}px;
    }
`;

export interface ProcessBarProps {
    width?: number;
    stepSigns?: string[];
    descriptions?: string[];
    fontSize?: number;
    stepSignSize?: number;
    processingStepColor?: string;
    notProcessedYetStepColor?: string;
    intermediateGradientColor?: string;
    currentProcessingStep?: number;
    barHeight?: number;
    processingStepGradientColor?: string[];
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

    const [stepSigns, setStepsSign] = useState<string[]>(["1", "2", "3", "✓"]);

    useEffect(() => {
        setStepsSign(props.stepSigns ?? ["1", "2", "3", "✓"]);
    }, [props.stepSigns]);

    const [barLength, setBarLength] = useState<number>(150);
    useEffect(() => {
        if (props.width && props.stepSignSize && props.stepSigns) {
            const barLength =
                (props.width - props.stepSignSize * props.stepSigns.length) /
                (props.stepSigns.length - 1);
            setBarLength(barLength);
        }
    }, [props.width, props.stepSignSize]);

    const toDecideColor = useCallback(
        (index: number) => {
            return props.currentProcessingStep &&
                props.currentProcessingStep >= index + 1
                ? props.processingStepColor
                : props.notProcessedYetStepColor;
        },
        [props.currentProcessingStep]
    );

    const toDecideGradientColor = useCallback(
        (index: number) => {
            return props.currentProcessingStep &&
                props.currentProcessingStep >= index + 1
                ? index + 1 === props.currentProcessingStep
                    ? [
                          props.processingStepColor,
                          props.intermediateGradientColor,
                          props.notProcessedYetStepColor,
                      ]
                    : [
                          props.processingStepColor,
                          props.intermediateGradientColor,
                          props.processingStepColor,
                      ]
                : [
                      props.notProcessedYetStepColor,
                      props.notProcessedYetStepColor,
                      props.notProcessedYetStepColor,
                  ];
        },
        [props.currentProcessingStep]
    );

    return (
        <StyledProcessBar
            width={props.width}
            stepSignSize={props.stepSignSize}
            fontSize={props.fontSize}
        >
            <DescriptionGroup
                stepSignSize={props.stepSignSize}
                toDecideColor={toDecideColor}
                barLength={barLength}
                fontSize={props.fontSize}
                descriptions={descriptions}
                stepSigns={props.stepSigns}
            />
            <BarGroup
                stepSigns={stepSigns}
                fontSize={props.fontSize}
                stepSignSize={props.stepSignSize}
                toDecideColor={toDecideColor}
                barLength={barLength}
                barHeight={props.barHeight}
                toDecideGradientColor={toDecideGradientColor}
            />
        </StyledProcessBar>
    );
});
