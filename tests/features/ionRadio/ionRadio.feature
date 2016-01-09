Feature: As a user I should be able to use ionRadio button.
  Background:
    Given "I" navigate to "/radio"

  @watch
  Scenario: ionRadio should not be checked at start (when no checked argument is passed).
    # Basic sanity checks.
    # Confirm no 3rd radio button in page.
    Then "I" should see "//*[contains(@class, 'item-radio')][1]"
    Then "I" should see "//*[contains(@class, 'item-radio')][2]"
    Then "I" should not see "//*[contains(@class, 'item-radio')][3]"

    # There should be no checked radio button.
    Then "I" should not see ".item-radio input:checked"

  @watch
  Scenario: ionRadio items should be selectable and that only one radio item is selected at a time.
    Given "I" click "//*[contains(@class, 'item-radio')][1]"
    Then "I" should see ".item-radio:first-child input:checked"
    Then "I" should not see ".item-radio:first-child + .item-radio input:checked"

    Given "I" click "//*[contains(@class, 'item-radio')][2]"
    Then "I" should not see ".item-radio:first-child input:checked"
    Then "I" should see ".item-radio:first-child + .item-radio input:checked"