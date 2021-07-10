import React from "react";
import {ProcessBar, ProcessBarProps} from "./index";

export default {
    title: "Components/ProcessBar",
    component: ProcessBar,
}

export const Basic = (args: ProcessBarProps) => <ProcessBar {...args} />