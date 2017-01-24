import { SiteMainPortalPage } from './app.po';

describe('site-main-portal App', function() {
  let page: SiteMainPortalPage;

  beforeEach(() => {
    page = new SiteMainPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
