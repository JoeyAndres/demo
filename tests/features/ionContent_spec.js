import { i_go_to, i_click, i_wait, i_should_see, i_should_not_see } from './lib/lib';

describe('ionContent', function() {
    beforeEach(() => {
        i_go_to('/content');
    });

    it ("shows the content (I can't really test this further, this is more like a sanity check)", function() {
        let such_ironic_text = "//*[contains(., 'Such Ironic')]";
        let very_meteor_text = "//*[contains(., 'Very meteor')]";
        let much_blaze_text = "//*[contains(., 'Much blaze')]";
        let my_photo = "//img[@src='doge.jpeg']";

        i_should_see(such_ironic_text);
        i_should_see(very_meteor_text);
        i_should_see(much_blaze_text);
        i_should_see(my_photo);
    });
});