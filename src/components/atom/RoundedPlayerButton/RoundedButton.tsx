import React from "react";
import styled from "styled-components";

export interface RoundedButtonProps {
    width?: number;
    backgroundColor?: string;
    iconSize?: number;
}

export const RoundedButton = styled.div<RoundedButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${props => props.width ?? 50}px;
  min-width: 50px;
  height: ${props => props.width ?? 50}px;
  min-height: 50px;
  cursor: pointer;
  background: ${props => props.backgroundColor ?? "transparent"};
`;