import React from "react";
import styled from "styled-components";

interface ButtonProps {
    width: number
}

const Button = styled.div<ButtonProps>`
  display: flex;
  width: ${props => props.width}px;
  height: ${props => 0.375 * props.width}px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  cursor: pointer;

  &:before, &:after {
    content: "";
    position: absolute;
    background: linear-gradient(-45deg, #ee7752, rgba(231, 60, 126, 0.55), rgba(35, 166, 213, 0.51), #23d5ab);
    inset: 5px;
    border-radius: 8px;
    transition: 0.5s;
    background-size: 400% 400%;
    animation: gradient 8s ease infinite;
  }

  &:hover::before {
    inset: -4px;
  }

  &:hover::after {
    inset: -4px;
    filter: blur(10px);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ButtonInner = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e1538;
  border-radius: 8px;
  z-index: 10;
  font-size: 1.2em;
  text-transform: uppercase;
  color: #fff;
  filter: blur(1px);

  &:hover {
    filter: blur(0);
  }
`;

export interface GradientBorderButtonProps extends ButtonProps {

}

export const GradientBorderButton = (props: GradientBorderButtonProps) => {

    return (
        <Button width={props.width}><ButtonInner>hover me</ButtonInner></Button>
    )
}