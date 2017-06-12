import { MeanContactlistAngular2APage } from './app.po';

describe('mean-contactlist-angular2-a App', () => {
  let page: MeanContactlistAngular2APage;

  beforeEach(() => {
    page = new MeanContactlistAngular2APage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
