import React from "react";
import styled from "styled-components";
import {RoundedButton, RoundedButtonProps} from "./RoundedButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

interface RoundedPreOrNextButtonProps {
    activeIconColor?: string;
}

const RoundedPreOrNextButton = styled(RoundedButton)<RoundedPreOrNextButtonProps>`
    box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.2),
                0 2px 5px rgba(0, 0, 0, 0.15),
                0 5px 10px rgba(0, 0, 0, 0.15);
    font-size: ${props => props.iconSize ?? 20}px;
    &:active {
      box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.25),
                  inset 0 3px 3px rgba(0, 0, 0, 0.15);
      color: ${props => props.activeIconColor ?? "#ff669a"};
      font-size: ${props => props.iconSize ? props.iconSize * 0.9 : 18}px;
    }
`;

export interface PreOrNextButtonProps extends RoundedButtonProps, RoundedPreOrNextButtonProps{
    icon: "forward" | "backward",
}

export const PreOrNextButton = React.memo((props: PreOrNextButtonProps) => {
    const icon = props.icon === "forward" ? faForward : faBackward;

    return (
        <RoundedPreOrNextButton activeIconColor={props.activeIconColor}>
            <FontAwesomeIcon icon={icon} />
        </RoundedPreOrNextButton>
    )
});