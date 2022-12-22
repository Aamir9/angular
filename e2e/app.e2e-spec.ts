import { BeckTemplatePage } from './app.po';

describe('Beck App', function() {
  let page: BeckTemplatePage;

  beforeEach(() => {
    page = new BeckTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
