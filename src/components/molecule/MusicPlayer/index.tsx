import React from "react";
import styled from "styled-components";
import {PlayButton} from "../../atom/RoundedPlayerButton/PlayButton";
import {PreOrNextButton} from "../../atom/RoundedPlayerButton/PreOrNextButton";

interface PlayerBlockProps {
    width?: number;
    backgroundColor?: string;
}

const PlayerBlock = styled.div<PlayerBlockProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${props => props.width ?? 300}px;
  min-width: 300px;
  height: ${props => props.width ? props.width / 5 : 60}px;
  min-height: 60px;
  background: ${props => props.backgroundColor ?? "#fbfbfb"};
  border: 2px solid #ffffff;
  border-radius: 80px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5),
              inset -5px -5px 15px #fff,
              inset 5px 5px 15px rgba(0, 0, 0, 0.3);
`

export interface MusicPlayerProps extends PlayerBlockProps{

}

export const MusicPlayer = (props: MusicPlayerProps) => {
    return (
        <PlayerBlock>
            <PreOrNextButton icon="backward" />
            <PlayButton />
            <PreOrNextButton icon="forward" />
        </PlayerBlock>
    )
}