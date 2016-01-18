Feature: As a user I should be able to use a basic ionList.
  Background:
    Given "I" navigate to "/lists"

  @watch
  Scenario: See list items
    Then "I" should see "//*[contains(., 'John Smith 1')]"
    Then "I" should see "//*[contains(., 'John Smith 2')]"
    Then "I" should see "//*[contains(., 'John Smith 3')]"
    Then "I" should see "//*[contains(., 'John Smith 4')]"
    Then "I" should see "//*[contains(., 'John Smith 5')]"
    Then "I" should see "//*[contains(., 'John Smith 6')]"
    Then "I" should see "//*[contains(., 'John Smith 7')]"
    Then "I" should see "//*[contains(., 'John Smith 8')]"
    Then "I" should see "//*[contains(., 'John Smith 9')]"
    Then "I" should see "//*[contains(., 'John Smith 10')]"
    Then "I" should see "//*[contains(., 'John Smith 11')]"
    Then "I" should see "//*[contains(., 'John Smith 12')]"
    Then "I" should see "//*[contains(., 'John Smith 13')]"
    Then "I" should see "//*[contains(., 'John Smith 14')]"
    Then "I" should see "//*[contains(., 'John Smith 15')]"
    Then "I" should see "//*[contains(., 'John Smith 16')]"
    Then "I" should see "//*[contains(., 'John Smith 17')]"
    Then "I" should see "//*[contains(., 'John Smith 18')]"
    Then "I" should see "//*[contains(., 'John Smith 19')]"
    Then "I" should see "//*[contains(., 'John Smith 20')]"
