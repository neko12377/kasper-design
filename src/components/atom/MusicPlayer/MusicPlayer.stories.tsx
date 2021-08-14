import React from "react";
import {MusicPlayer, MusicPlayerProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/MusicPlayer",
    component: MusicPlayer,
}

const Template: Story<MusicPlayerProps> = (args) => <MusicPlayer {...args} />
export const Basic = Template.bind({});