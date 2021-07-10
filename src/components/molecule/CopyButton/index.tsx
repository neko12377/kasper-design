import React from "react";
import {ButtonWithRef} from "components/atom/ButtonWithRef";

interface CopyButtonProps {
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
        buttonRef.current.style.backgroundColor = "#52c8f9";
        buttonRef.current.style.border = "1px solid #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    const handleLeave = (
        buttonRef: React.MutableRefObject<HTMLButtonElement>
    ) => {
        buttonRef.current.style.backgroundColor = "none";
        buttonRef.current.style.border = "solid 1px #b6b6b6";
        buttonRef.current.style.backgroundImage =
            "linear-gradient(to top, #f7f7f7, #ffffff)";
        buttonRef.current.style.color = "#5e5e5e";
    };
    const handlePress = (
        buttonRef: React.MutableRefObject<HTMLButtonElement>
    ) => {
        buttonRef.current.style.backgroundColor = "#36a9fb";
        buttonRef.current.style.border = "solid 1px #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    const handleUp = (buttonRef: React.MutableRefObject<HTMLButtonElement>) => {
        buttonRef.current.style.backgroundColor = "#52c8f9";
        buttonRef.current.style.border = "1px solid #35bff8";
        buttonRef.current.style.backgroundImage = "none";
        buttonRef.current.style.color = "#ffffff";
    };
    return (
        <ButtonWithRef
            backgroundImage="linear-gradient(to top, #f7f7f7, #ffffff)"
            backgroundColor="none"
            borderColor="#b6b6b6"
            borderWidth={1}
            borderStyle="solid"
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
