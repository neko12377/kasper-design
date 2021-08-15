import React from "react";
import {PlayButton, PlayButtonProps} from "./PlayButton";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/RoundedPlayerButton/PlayButton",
    component: PlayButton,
    argTypes: {
        width: {
            defaultValue: 40,
        },
        iconSize: {
            defaultValue: 20,
        },
        backgroundColor: {
            defaultValue: "transparent",
        },
        handleClick: {
            table: {
                disable: true,
            }
        }
    }
}

const Template: Story<PlayButtonProps> = (args) => <PlayButton {...args} />
export const Basic = Template.bind({});