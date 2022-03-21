import { ItacademyPage } from './app.po';

describe('itacademy App', function() {
  let page: ItacademyPage;

  beforeEach(() => {
    page = new ItacademyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
