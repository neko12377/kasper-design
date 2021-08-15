import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import {RoundedButton} from "./RoundedButton";

interface RoundedPlayButtonProps {
    isPlaying: boolean;
    activeIconColor?: string;
}

const RoundedPlayButton = styled(RoundedButton)<RoundedPlayButtonProps>`
  box-shadow: ${
          props => props.isPlaying
                  ? "inset 0 -2px 2px rgba(0, 0, 0, 0.25)," +
                    "inset 0 3px 3px rgba(0, 0, 0, 0.15);"
                  : "inset 0 -2px 2px rgba(0, 0, 0, 0.2), " +
                    "0 2px 5px rgba(0, 0, 0, 0.15)," +
                    "0 5px 10px rgba(0, 0, 0, 0.15);"
  };
  font-size: ${
          props => props.isPlaying && props.iconSize
                  ? props.iconSize * 0.9
                  : !props.isPlaying && props.iconSize
                          ? props.iconSize
                          : props.isPlaying && !props.iconSize
                                  ? 18 : 20
  }px;
  color:${
    props => props.isPlaying && props.activeIconColor
            ? props.activeIconColor
            : !props.isPlaying 
                    ? "#242424"
                    : "#ff669a"
  }
`;

export interface PlayButtonProps {
    width?: number;
    backgroundColor?: string;
    iconSize?: number;
    handleClick?: () => void;
    activeIconColor?: string;
}

export const PlayButton = React.memo((props: PlayButtonProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClick = () => {
        props.handleClick && props.handleClick();
        setIsPlaying(preState => !preState);
    }
    const buttonIcon = isPlaying ? faPause : faPlay;
    console.info(buttonIcon, isPlaying);
    return (
        <RoundedPlayButton onClick={handleClick} isPlaying={isPlaying}>
            <FontAwesomeIcon icon={buttonIcon}/>
        </RoundedPlayButton>
    )
});