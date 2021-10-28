describe("average price", () => {
  it("should be able to see average price", () => {
    cy.intercept("close.json", {
      bpi: {
        "2021-10-27": 500,
        "2021-10-28": 1000,
      },
    });

    cy.visit("/");

    cy.get("body").should("contain", "750.00 USD");
  });

  it("should see error state if api call fails", () => {
    cy.intercept("close.json", { statusCode: 500 });

    cy.visit("/");

    cy.get("body").should("contain", "Could not fetch the average price");
  });

  it("should see loading state while waiting for api call", () => {
    cy.intercept("close.json", { delayMs: 10000 });

    cy.visit("/");

    cy.get("body").should("contain", "Loading...");
  });
});
