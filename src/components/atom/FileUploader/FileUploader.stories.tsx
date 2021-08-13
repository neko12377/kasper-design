import React from "react";
import {FileUploader, FileUploaderProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/FileUploading",
    component: FileUploader,
}

export const Basic: Story<FileUploaderProps> = (args: FileUploaderProps) => <FileUploader {...args} />