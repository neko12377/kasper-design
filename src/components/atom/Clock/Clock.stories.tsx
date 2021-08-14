import React from "react";
import {Clock, ClockProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/Clock",
    component: Clock,
    argTypes: {
        diameter: {
            defaultValue: 200,
        },
        numberSize: {
            defaultValue: 1.5,
        },
        middleCircle:{
            defaultValue: 10,
        },
    }
}

const Template: Story<ClockProps> = (args) => <Clock {...args}/>

export const Basic = Template.bind({})