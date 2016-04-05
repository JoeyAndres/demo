# Created by jandres at 29/03/16
Feature: ionScroll scrolls
  ionScroll should scroll wrt to the given parameters.

  @watch
  Scenario: Scroll horizontal only, if direction="x"
    Given "I" navigate to "scrollDirectionX"
    Then "I" take note of the scroll position
    Then "I" drag "ion-scroll" to x:"-100" y:"5"

  @watch
  Scenario: Scroll vertical only, if direction="y"
    Given "I" navigate to "scrollDirectionY"
    Then "I" take note of the scroll position

  @watch
  Scenario: Scroll in all directions if direction="xy"

  @watch
  Scenario: Horizontal Scrollbar should be invisible if scrollbarX="false"

  @watch
  Scenario: Horizontal Scrollbar should be visible if scrollbarX="true"

  @watch
  Scenario: Horizontal Scrollbar should be invisible if scrollbarY="false"

  @watch
  Scenario: Horizontal Scrollbar should be visible if scrollbarX="true"