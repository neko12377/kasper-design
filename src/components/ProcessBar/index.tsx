import React from "react";
import styled from "styled-components";

const StyledProcessBar = styled.div`
    width: 538px;
    height: 22px;
    color: #fff;
    background-color: red;
`;

const ProcessBarStep = styled.div`
    width: 22px;
`;

export const ProcessBar = () => {
    return (
        <StyledProcessBar>
            <div />
        </StyledProcessBar>
    );
};
