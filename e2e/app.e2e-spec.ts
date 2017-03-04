import { GrandviewPage } from './app.po';

describe('grandview App', () => {
  let page: GrandviewPage;

  beforeEach(() => {
    page = new GrandviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
