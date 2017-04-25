import { QuickStartAppPage } from './app.po';

describe('quick-start-app App', () => {
  let page: QuickStartAppPage;

  beforeEach(() => {
    page = new QuickStartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
