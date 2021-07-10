import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
    backgroundColor?: string;
    backgroundImage?: string;
    color?: string;
    borderStyle?: string;
    borderWidth?: number;
    borderColor?: string;
    borderShadow?: string;
    borderRadius?: string;
    height?: string;
    width?: string;
    hoverObject?: any;
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
  border-style: ${props => props.borderStyle ?? "solid"};
  border-width: ${props => props.borderWidth ?? "1"}px;
  border-color: ${props => props.borderColor ?? "#fc5c4f"};
  cursor: pointer;
  background-color: ${props => props.backgroundColor ?? "#ff5243"};
  background-image: ${props => props.backgroundImage ?? "none"};
  color: ${props => props.color ?? "#fff"};
  transition: background-color 0.3s;
  &:hover {
    ${props => props.hoverObject}
  }
`;

export interface ButtonProps extends StyledButtonProps {
    children?: React.ReactNode;
    handlePress?: () => void;
    handleUp?: () => void;
    handleLeave?: () => void;
    handleHover?: () => void;
    handleClick?: () => void;
}

export const ButtonWithRef = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
        const handleClick = () => {
            props.handleClick && props.handleClick();
        };
        return (
            <StyledButton
                backgroundColor={props.backgroundColor}
                backgroundImage={props.backgroundImage}
                color={props.color}
                borderColor={props.borderColor}
                borderWidth={props.borderWidth}
                borderStyle={props.borderStyle}
                borderShadow={props.borderShadow}
                borderRadius={props.borderRadius}
                height={props.height}
                width={props.width}
                onMouseDown={() => handlePress()}
                onMouseUp={() => handleUp()}
                onMouseLeave={() => handleLeave()}
                onMouseOver={() => handleHover()}
                onClick={() => handleClick()}
                ref={ref}
            >
                {props.children}
            </StyledButton>
        );
    }
);
