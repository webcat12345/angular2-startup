import { GenesisUiPage } from './app.po';

describe('genesis-ui App', function() {
  let page: GenesisUiPage;

  beforeEach(() => {
    page = new GenesisUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
