import {CopyButton, CopyButtonProps} from "./index";
import {Story} from "@storybook/react";
import React, {useRef} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const CopyGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Target = styled.div`
  width: auto;
  height: 20px;
  margin-right: 10px;
  color: #f0f0f0;
`;

export default {
    title: "Components/molecule/CopyButton",
    component: CopyButton,
    argTypes: {
        buttonRef: {
            options: ["not available"],
            control: {type: "radio"},
        },
        targetRef: {
            options: ["not available"],
            control: {type: "radio"},
        }
    },
}

interface CopyButtonStoryProps {
    buttonDescription?: string;
    targetDescription?: string
}

const template: Story<CopyButtonStoryProps> = (args) => {
    const buttonRef = useRef(document.createElement("button"));
    const targetRef = useRef(document.createElement("div"));
    return (
        <Container>
            <input placeholder="paste here"/>
            <CopyGroup>
                <Target ref={targetRef}>{args.targetDescription ?? "Copy me!"}</Target>
                <CopyButton targetRef={targetRef} buttonRef={buttonRef}>
                    {args.buttonDescription ?? "Copy"}
                </CopyButton>
            </CopyGroup>
        </Container>
    )
}

export const Basic = template.bind({});
Basic.args = {
    buttonDescription: "Copy",
    targetDescription: "Copy me!",
}