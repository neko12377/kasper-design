import React from "react";
import {Story} from "@storybook/react";
import {PreOrNextButton, PreOrNextButtonProps} from "./PreOrNextButton";

export default {
    title: "Components/atom/RoundedPlayerButton/PreOrNextButton",
    component: PreOrNextButton,
    argTypes: {
        icon: {
            options: ["forward", "backward"],
        }
    }
}

const Template: Story<PreOrNextButtonProps> = (args) => <PreOrNextButton {...args} />
export const Forward = Template.bind({});
Forward.args = {
    icon: "forward",
}

export const Backward = Template.bind({});
Backward.args = {
    icon: "backward",
}