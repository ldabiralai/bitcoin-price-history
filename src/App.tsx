import React from "react";
import styled from "@emotion/styled";

import Price from "./components/Price";
import ErrorMessage from "./components/ErrorMessage";
import getAveragePrice from "./services/getAveragePrice";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface State {
  isLoaded: boolean;
  isError: boolean;
  averagePrice: string;
}

class App extends React.Component<{}, State> {
  state = {
    isLoaded: false,
    isError: false,
    averagePrice: "",
  };

  componentDidMount = async () => {
    try {
      const averagePrice = await getAveragePrice();

      this.setState({
        averagePrice,
        isLoaded: true,
      });
    } catch (e) {
      this.setState({
        isError: true,
        isLoaded: true,
      });
    }
  };

  render() {
    const { isLoaded, isError, averagePrice } = this.state;

    return (
      <Container>
        <h1>Average Price</h1>
        {!isLoaded && <span>Loading...</span>}
        {isLoaded && averagePrice && <Price>{averagePrice}</Price>}
        {isError && (
          <ErrorMessage>Could not fetch the average price</ErrorMessage>
        )}
      </Container>
    );
  }
}

export default App;
