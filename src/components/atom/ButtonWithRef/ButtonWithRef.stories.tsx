import React, {useRef} from "react";
import {ButtonWithRef, ButtonProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/ButtonWithRef",
    component: ButtonWithRef,
    argTypes: {
        children: {defaultValue: "Button"},
        handleClick: {
            action: "clicked",
            table: {
                disable: true,
            }
        },
        handlePress: {
            table: {
                disable: true,
            }
        },
        handleHover: {
            table: {
                disable: true,
            }
        },
        handleLeave: {
            table: {
                disable: true,
            }
        },
        handleUp: {
            table: {
                disable: true,
            }
        },
        handleTouchStart: {
            table: {
                disable: true,
            }
        },
        handleTouchEnd: {
            table: {
                disable: true,
            }
        },
    }
}

const BasicTemplate: Story<ButtonProps> = (args) => {
    const buttonRef = useRef(document.createElement("button"));
    args.handleHover = () => {
        buttonRef.current.style.backgroundColor = "#fa6e62"
    }
    args.handlePress = () => {
        buttonRef.current.style.backgroundColor = "#e74d32";
    }
    args.handleUp = () => {
        buttonRef.current.style.backgroundColor = "#ff5243"
    }
    args.handleLeave = () => {
        buttonRef.current.style.backgroundColor = "#fc5c4f";
    }
    args.handleTouchStart = () => {
        buttonRef.current.style.backgroundColor = "#e74d32";
    }
    args.handleTouchEnd = () => {
        buttonRef.current.style.backgroundColor = "#fc5c4f";
    }
    return <ButtonWithRef {...args} ref={buttonRef}/>
}
export const Basic = BasicTemplate.bind({});
Basic.args = {
    children: "Basic",
}

const LakeTemplate: Story<ButtonProps> = (args) => {
    const buttonRef = useRef(document.createElement("button"));
    args.handleHover = () => {
        buttonRef.current.style.backgroundColor = "#6be8e8";
    }
    args.handlePress = () => {
        buttonRef.current.style.backgroundColor = "#50c6c6";
    }
    args.handleUp = () => {
        buttonRef.current.style.backgroundColor = "#7dd3d3"
    }
    args.handleLeave = () => {
        buttonRef.current.style.backgroundColor = "#7dd3d3";
    }
    args.handleTouchStart = () => {
        buttonRef.current.style.backgroundColor = "#50c6c6";
    }
    args.handleTouchEnd = () => {
        buttonRef.current.style.backgroundColor = "#7dd3d3";
    }
    return <ButtonWithRef {...args} ref={buttonRef}/>
}

export const Lake = LakeTemplate.bind({});
Lake.args = {
    children: "Lake",
    backgroundColor: "#7dd3d3",
    borderColor: "#63c9c9",
    borderWidth: 1,
    borderStyle: "solid",
}
