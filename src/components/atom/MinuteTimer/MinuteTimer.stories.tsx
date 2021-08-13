import React from "react"
import {MinuteTimer, MinuteTimerProps} from "./index";

export default {
    title: "Components/atom/MinuteTimer",
    component: MinuteTimer,
    argTypes: {leftTime: {defaultValue: "05:00"}}
}

export const Basic = (args: MinuteTimerProps) => <MinuteTimer {...args} />