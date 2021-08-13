import React from "react";
import {BannerWithDropProps, BannerWithDrop} from "./Welcome";
import {Story} from "@storybook/react";

export default {
    title: "HomePage/Welcome",
    component: BannerWithDrop,
    argTypes: {title: {defaultValue: "Welcome"}}
}

export const WelcomeWelcome:Story<BannerWithDropProps> = (args) => <BannerWithDrop {...args}/>