import React from "react";
import {Clock, ClockProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/Clock",
    component: Clock,
}

const Template: Story<ClockProps> = (args) => <Clock {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    diameter: 200,
    numberSize: 1.5,
    middleCircle: 10,
}