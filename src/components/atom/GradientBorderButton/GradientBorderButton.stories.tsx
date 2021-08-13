import React from "react";
import {GradientBorderButton, GradientBorderButtonProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/GradientBorderButton",
    component: GradientBorderButton,
    argTypes: {width: {defaultValue: 160}}
}

export const Basic: Story<GradientBorderButtonProps> = (args) => <GradientBorderButton {...args} />