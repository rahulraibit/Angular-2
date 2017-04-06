import { ExperimentonePage } from './app.po';

describe('experimentone App', () => {
  let page: ExperimentonePage;

  beforeEach(() => {
    page = new ExperimentonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
