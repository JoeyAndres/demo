Feature: As a user I should be able to use ionPopup as popup dialog.
  Background:
    Given "I" navigate to "/popup"

  @watch
  Scenario: Use normal popup
    Given "I" click "//button[contains(., 'Show Popup')]"

    Then "I" should see "//*[contains(., 'A Popup')]"
    And "I" should see "//*[contains(., 'quick popup.')]"

    Given "I" click "//button[contains(., 'Close me')]"
    Then "I" should not see "//*[contains(., 'A Popup')]"
    And "I" should not see "//*[contains(., 'quick popup.')]"

  @watch
  Scenario: Confirm popup.
    Given "I" click "//button[contains(., 'Show Confirm')]"

    Then "I" should see "//*[contains(., 'Are you sure?')]"
    And "I" should see "//*[contains(., 'Are you really sure?')]"

    Given "I" click "//button[contains(., 'Ok')]"
    Then "I" should not see "//*[contains(., 'A Popup')]"
    Then "I" should not see "//*[contains(., 'Are you sure?')]"
    And "I" should not see "//*[contains(., 'Are you really sure?')]"

    # The whole thing but with cancel button.
    Given "I" click "//button[contains(., 'Show Confirm')]"

    Then "I" should see "//*[contains(., 'Are you sure?')]"
    And "I" should see "//*[contains(., 'Are you really sure?')]"

    Given "I" click "//button[contains(., 'Cancel')]"
    Then "I" should not see "//*[contains(., 'A Popup')]"
    Then "I" should not see "//*[contains(., 'Are you sure?')]"
    And "I" should not see "//*[contains(., 'Are you really sure?')]"

  @watch
  Scenario: Alert popup
    Given "I" click "//button[contains(., 'Show Alert')]"

    Then "I" should see "//*[contains(., 'An Alert')]"
    And "I" should see "//*[contains(., 'This is an alert!')]"

    Given "I" click "//button[contains(., 'Got It.')]"
    Then "I" should not see "//*[contains(., 'An Alert')]"
    And "I" should not see "//*[contains(., 'This is an alert!')]"

  @watch
  Scenario: Prompt popup
    Given "I" click "//button[contains(., 'Show Prompt')]"

    Then "I" should see "//*[contains(., 'Security Check')]"
    And "I" should see "//*[contains(., 'Please enter your password')]"
    And "I" should see "//input[contains(@placeholder, 'Your Password')]"

    Given "I" click "//button[contains(., 'Submit')]"
    Then "I" should not see "//*[contains(., 'Security Check')]"
    And "I" should not see "//*[contains(., 'Please enter your password')]"
    And "I" should not see "//input[contains(@placeholder, 'Your Password')]"