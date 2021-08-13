import React from "react";
import {FileUploader, FileUploaderProps} from "./index";
import {Story} from "@storybook/react";

export default {
    title: "Components/atom/FileUploading",
    component: FileUploader,
    argTypes: {change: {action: "uploaded"}}
}

export const Basic: Story<FileUploaderProps> = (args: FileUploaderProps) => <FileUploader {...args} />