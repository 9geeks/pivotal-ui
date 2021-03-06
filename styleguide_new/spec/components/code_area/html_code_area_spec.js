import '../../spec_helper';

describe('HtmlCodeArea', () => {
  let code, description, HtmlCodeArea;

  beforeEach(() => {
    code = 'let a = 1; let b = 2;';
    HtmlCodeArea = require('../../../src/components/code_area/html_code_area');
  });

  describe('rendering a description without markdown', () => {
    beforeEach(() => {
      description = 'some-description';
      ReactDOM.render(<HtmlCodeArea {...{description, code}}/>, root);
    });

    it('renders the description', () => {
      expect('.code-area-description').toHaveText(description);
    });
  });

  describe('rendering a description with markdown', () => {
    beforeEach(() => {
      description = 'not bold **some-description** also not bold';
      ReactDOM.render(<HtmlCodeArea {...{description, code}}/>, root);
    });

    it('correctly renders the markdown', () => {
      expect('strong').toHaveText('some-description');
    });
  });
});