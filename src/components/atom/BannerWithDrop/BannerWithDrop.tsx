import React from "react";
import styled from "styled-components";

interface BannerTitleProps {
    titleShadow: string
}

const BannerTitle = styled.h1<BannerTitleProps>`
  font-size: 54px;
  background: linear-gradient(#30629b, #69df9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  cursor: pointer;
  user-select: none;

  &::before {
    content: "${props => props.titleShadow ?? ""}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#30629b, #69df9d);
    filter: blur(3px);
    transform: translate(5px, 42px) rotateX(180deg) skewX(-15deg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Drop = styled.div`
  position: relative;
  top: -10px;
  left: -30px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 56% 44% 53% 47% / 49% 68% 32% 51%;
  box-shadow: inset 10px 5px 20px rgba(0, 0, 0, 0.5),
  8px 5px 15px rgba(0, 0, 0, 0.7),
  18px 8px 15px rgba(0, 0, 0, 0.5),
    inset -2px -2px 2px rgba(255, 255, 255, 0.1);
`

export interface BannerWithDropProps {
    title: string;
}

export const BannerWithDrop = (props: BannerWithDropProps) => {
    const {title} = props
    return (
        <React.Fragment>
            <BannerTitle titleShadow={title}>{title}</BannerTitle>
            <Drop/>
        </React.Fragment>
    )
}