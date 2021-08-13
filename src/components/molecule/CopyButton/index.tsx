import React from "react";
import {ButtonWithRef} from "../../atom/ButtonWithRef";

export interface CopyButtonProps {
    children?: React.ReactNode;
    targetRef: React.MutableRefObject<any>;
    buttonRef: React.MutableRefObject<HTMLButtonElement>;
}

export const CopyButton = (props: CopyButtonProps) => {
    const handleClick = (targetRef: React.MutableRefObject<any>) => {
        const text = targetRef.current.innerText ?? "";
        navigator.clipboard.writeText(text).then();
    };
    const handleHover = (
        buttonRef: React.MutableRefObject<HTMLButtonElement>
    ) => {
        buttonRef.current.style.backgroundColor = "none";
        buttonRef.current.style.border = "none";
        buttonRef.current.style.backgroundImage = "linear-gradient(-220deg, rgb(35, 166, 213), #23d5ab)";
        buttonRef.current.style.color = "#5e5e5e";
    };
    const handleLeave = (
        buttonRef: React.MutableRefObject<HTMLButtonElement>
    ) => {
        buttonRef.current.style.backgroundColor = "none";
        buttonRef.current.style.border = "none";
        buttonRef.current.style.backgroundImage =
            "linear-gradient(-60deg, rgb(35, 166, 213), #23d5ab)";
        buttonRef.current.style.color = "#5e5e5e";
    };
    const handlePress = (
        buttonRef: React.MutableRefObject<HTMLButtonElement>
    ) => {
        buttonRef.current.style.backgroundColor = "#36a9fb";
        buttonRef.current.style.border = "none";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#5e5e5e";
    };
    const handleUp = (buttonRef: React.MutableRefObject<HTMLButtonElement>) => {
        buttonRef.current.style.backgroundColor = "#52c8f9";
        buttonRef.current.style.border = "none";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#5e5e5e";
    };
    return (
        <ButtonWithRef
            backgroundImage="linear-gradient(-60deg, rgb(35, 166, 213), #23d5ab)"
            backgroundColor="none"
            borderColor="none"
            borderWidth={0}
            borderStyle="none"
            color="#5e5e5e"
            handleClick={() => handleClick(props.targetRef)}
            ref={props.buttonRef}
            handleHover={() => handleHover(props.buttonRef)}
            handleLeave={() => handleLeave(props.buttonRef)}
            handlePress={() => handlePress(props.buttonRef)}
            handleUp={() => handleUp(props.buttonRef)}
        >
            {props.children}
        </ButtonWithRef>
    );
};
