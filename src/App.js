import React from "react";
import styled from "@emotion/styled";

import Price from "./components/Price";
import Error from "./components/Error";
import getAveragePrice from "./services/getAveragePrice";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    isLoaded: false,
    isError: false,
    averagePrice: undefined
  };

  componentDidMount = async () => {
    try {
      const averagePrice = await getAveragePrice();

      this.setState({
        averagePrice,
        isLoaded: true
      });
    } catch (e) {
      this.setState({
        isError: true
      });
    }
  };

  render() {
    const { isLoaded, isError, averagePrice } = this.state;

    return (
      <Container>
        <h1>Average Price</h1>
        {isLoaded && <Price>{averagePrice}</Price>}
        {isError && <Error>Could not fetch the average price</Error>}
      </Container>
    );
  }
}

export default App;
