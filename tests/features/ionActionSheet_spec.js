import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see } from './lib/lib';

describe('ionActionSheet', function() {
    beforeEach(() => {
        i_go_to('/actionSheet');
    });

    describe('Default behaviour (no modifications in config).', function () {
        beforeEach(() => {
            i_click('[data-action=showActionSheet]');
        });

        it('displays ionActionSheet when the "Show Action Sheet" button is clicked.', function () {
            let active_backdrop = '.action-sheet-backdrop.active';
            let actionsheet = '.action-sheet-wrapper.action-sheet-up';
            i_should_see(active_backdrop);
            i_should_see(actionsheet);

            // Title and button.
            let actionsheet_title = `//*[contains(@class, 'action-sheet-wrapper')]//*[contains(., 'ActionSheet Example')]`;
            let actionsheet_share_button = `//*[contains(@class, 'action-sheet-wrapper')]//button[contains(., 'Share')]`;
            let actionsheet_move_button = `//*[contains(@class, 'action-sheet-wrapper')]//button[contains(., 'Move')]`;
            let actionsheet_delete_button = `//*[contains(@class, 'action-sheet-wrapper')]//button[contains(., 'Delete')]`;
            let actionsheet_cancel_button = `//*[contains(@class, 'action-sheet-wrapper')]//button[contains(., 'Cancel')]`;
            i_should_see(actionsheet_title);
            i_should_see(actionsheet_share_button);
            i_should_see(actionsheet_move_button);
            i_should_see(actionsheet_delete_button);
            i_should_see(actionsheet_cancel_button);
        });

        it('hides when I click the background', function() {
            let active_backdrop = '.action-sheet-backdrop.active';
            let actionsheet = '.action-sheet-wrapper.action-sheet-up';
            i_click('body');

            i_wait(2);  // Wait for the actionsheet to animate out.

            i_should_not_see(active_backdrop);
            i_should_not_see(actionsheet);
        });

        it('hides when I click one of the buttons', function() {
            let active_backdrop = '.action-sheet-backdrop.active';
            let actionsheet = '.action-sheet-wrapper.action-sheet-up';
            let actionsheet_share_button = "//button[contains(., 'Share')]";
            i_click(actionsheet_share_button);

            i_wait(2);  // Wait for the actionsheet to animate out.

            i_should_not_see(active_backdrop);
            i_should_not_see(actionsheet);
        });
    });
});