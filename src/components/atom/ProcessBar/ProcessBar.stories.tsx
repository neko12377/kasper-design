import React from "react";
import {ProcessBar, ProcessBarProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/ProcessBar",
    component: ProcessBar,
}

const Template: Story<ProcessBarProps> = (args: ProcessBarProps) => <ProcessBar {...args} />
export const Basic = Template.bind({});
Basic.args = {
    notProcessedYetStepColor: "#adb3ad",
    processingStepColor: "#23d223",
    currentProcessingStep: 2
}
