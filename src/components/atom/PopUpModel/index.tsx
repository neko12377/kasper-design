import React from "react";
import styled from "styled-components";

interface StyledPopUpModelProps {
    width?: number;
    height?: number;
    backgroundColor?: string;
    left?: number;
    top?: number;
}

const StyledPopUpModel = styled.div<StyledPopUpModelProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${props => props.width ?? 200}px;
    height: ${props => props.height ?? 55}px;
    background-color: ${props => props.backgroundColor ?? "#fbfcfd"};
    position: absolute;
    left: ${props =>
        props.left ?? window.innerWidth / 2 - (props.width ?? 200) / 2}px;
    top: ${props =>
        props.top ?? window.innerHeight / 2 - (props.height ?? 55) / 2}px;
`;

interface MessageSectionProps {
    isBottomButton?: boolean;
}

const MessageSection = styled.div<MessageSectionProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => (props.isBottomButton ? "65%" : "100%")};
    width: 100%;
`;

export interface PoPUpModelProps extends StyledPopUpModelProps {
    children?: React.ReactNode;
    message?: string;
    icon?: React.ReactElement;
}

export const PopUpModel = (props: PoPUpModelProps) => {
    return (
        <StyledPopUpModel
            width={props.width}
            height={props.height}
            backgroundColor={props.backgroundColor}
            left={props.left}
            top={props.top}
        >
            {props.children ?? (
                <MessageSection>
                    {props.icon ?? null}
                    {props.message ?? "Pop Up!"}
                </MessageSection>
            )}
        </StyledPopUpModel>
    );
};
