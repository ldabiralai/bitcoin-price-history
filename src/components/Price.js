import React from "react";
import styled from "@emotion/styled";

const StyledPrice = styled.span`
  font-size: 64px;
`;

class Price extends React.Component {
  render() {
    const { children } = this.props;

    return <StyledPrice>{children} USD</StyledPrice>;
  }
}

export default Price;
