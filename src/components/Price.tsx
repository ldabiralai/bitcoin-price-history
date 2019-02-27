import React from "react";
import styled from "@emotion/styled";

const StyledPrice = styled.span`
  font-size: 64px;
`;

interface Props {
  children: string;
}

const Price = ({ children }: Props): JSX.Element => {
  return <StyledPrice>{children} USD</StyledPrice>;
};

export default Price;
