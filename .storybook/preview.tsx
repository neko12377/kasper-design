import React from "react";
import styled from "styled-components";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "dark",
        values: [
            {name: "light", value: "#f9fafc"},
            {name: "dark", value: "#23252f"},
        ]
    },
    layout: "centered",
}

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const decorators = [
    (Story: any) => (
        <Base>
            <Story/>
        </Base>
    )
]
