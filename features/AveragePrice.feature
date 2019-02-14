Feature: Customer wants to view the average price over the last month

  Scenario: Happy path
    Given I visit the home page
    Then I should see:
      | Average Price | 3675.26 USD |


  Scenario: API fails
    Given the API fails
    When I visit the home page
    Then I should see:
      | Could not fetch the average price |