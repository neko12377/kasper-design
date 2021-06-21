import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderShadow?: string;
    borderRadius?: string;
    height?: string;
    width?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ?? "80px"};
    height: ${props => props.height ?? "28px"};
    border-radius: ${props => props.borderRadius ?? "4px"};
    box-shadow: ${props =>
        props.borderShadow ?? "0px 2px 5px 0 rgba(0, 0, 0, 0.28)"};
    border: ${props => props.border ?? "solid 1px #fc5c4f"};
    cursor: pointer;
    background-color: ${props => props.backgroundColor ?? "#ff5243"};
    color: ${props => props.color ?? "#fff"};
`;

interface ButtonProps extends StyledButtonProps {
    children?: string | React.ReactDOM;
    handlePress?: () => void;
    handleUp?: () => void;
    handleLeave?: () => void;
    handleHover?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const handlePress = () => {
            props.handlePress && props.handlePress();
        };
        const handleUp = () => {
            props.handleUp && props.handleUp();
        };
        const handleLeave = () => {
            props.handleLeave && props.handleLeave();
        };
        const handleHover = () => {
            props.handleHover && props.handleHover();
        };
        return (
            <StyledButton
                backgroundColor={props.backgroundColor}
                color={props.color}
                border={props.border}
                borderShadow={props.borderShadow}
                borderRadius={props.borderRadius}
                height={props.height}
                width={props.width}
                onMouseDown={() => handlePress()}
                onMouseUp={() => handleUp()}
                onMouseLeave={() => handleLeave()}
                onMouseOver={() => handleHover()}
                ref={ref}
            >
                {props.children}
            </StyledButton>
        );
    }
);
