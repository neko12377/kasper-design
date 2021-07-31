import {CopyButton, CopyButtonProps} from "./index";
import {Story} from "@storybook/react";
import React, {useRef} from "react";
import styled from "styled-components";

const Target = styled.div`
    width: auto;
    height: 20px;
    margin-right: 10px;
`;

export default {
    title: "Components/CopyButton",
    component: CopyButton,
}

export const Basic: Story<CopyButtonProps> = () => {
    const buttonRef = useRef(document.createElement("button"));
    const targetRef = useRef(document.createElement("div"));
    return (
        <React.Fragment>
            <Target ref={targetRef}>Copy me!</Target>
            <CopyButton targetRef={targetRef} buttonRef={buttonRef}>
                Copy
            </CopyButton>
        </React.Fragment>
    )
}