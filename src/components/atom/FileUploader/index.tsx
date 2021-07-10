import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;

const UploadImgBlock = styled.img`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  height: auto;
`;
const UploadImgInput = styled.input.attrs({
    type: "file",
    id: "uploadInput",
    accept: "image/jpg, image/jpeg, image/tif, image/tiff, image/png",
})`
  display: none;
`;
const UploadImgInputLabel = styled.label.attrs({for: "uploadInput"})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 28px;
  border: solid 1px #b6b6b6;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0 rgba(6, 0, 0, 0.2);
  background-image: linear-gradient(to top, #f7f7f7, #ffffff);
  color: #5e5e5e;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: 400;
  font-stretch: normal;
  font-size: 14px;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: #52c8f9;
    border: 1px solid #35bff8;
    background-image: none;
    color: #ffffff;
  }
`;

export interface FileUploaderProps {
}

export const FileUploader = (props: FileUploaderProps) => {
    const [preview, setPreview] = useState("");
    const pictPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setPreview(fileReader.result as string)
        })
        file && fileReader.readAsDataURL(file);
    }
    return (
        <Wrapper>
            <UploadImgBlock src={preview}/>
            <UploadImgInput onChange={pictPicture}/>
            <UploadImgInputLabel>
                pick a picture
            </UploadImgInputLabel>
        </Wrapper>
    )
}
