import test from 'tape';
import {CopyToClipboard} from '../src/Component';

test('CopyToClipboard', t => {
  t.ok(CopyToClipboard instanceof Function, 'should be function');
  t.end();
});

/*
describe('CopyToClipboard', () => {
  const CopyToClipboardInjector = require('inject!../src/CopyToClipboard');
  let copy, CopyToClipboard, onCopy;


  beforeEach(() => {
    copy = jasmine.createSpy('@nosplatform/copy-to-clipboard');
    onCopy = jasmine.createSpy('onCopy');
  });


  beforeEach(() => CopyToClipboard = CopyToClipboardInjector({
    '@nosplatform/copy-to-clipboard': copy
  }));

  beforeEach(() => {
  });


  const create = (children, text = 'test') =>
    TestUtils.renderIntoDocument(<CopyToClipboard
      text={text} onCopy={onCopy} children={children} />);


  it('should be ok', () => {
    expect(CopyToClipboard).toBeTruthy();
  });


  it('should require children to be present', () => {
    expect(create).toThrow();
  });


  it('should be ok with multiple children present', () => {
    expect(() => TestUtils.renderIntoDocument((
      <CopyToClipboard text="test" onCopy={onCopy}>
        <span>one</span>
        <span>two</span>
      </CopyToClipboard>
    ))).toThrow();
  });

  it('should be expect one child present', () => {
    expect(() => TestUtils.renderIntoDocument((
      <CopyToClipboard text="test" onCopy={onCopy}>
        <span>one</span>
      </CopyToClipboard>
    ))).not.toThrow();
  });

  it('should copy on click on child element', () => {
    const span = React.findDOMNode(create(<span>test</span>));

    TestUtils.Simulate.click(span);

    expect(copy).toHaveBeenCalled();
  });


  it('should copy with specified text', () => {
    const span = React.findDOMNode(create(<span>test</span>, 'hello'));

    TestUtils.Simulate.click(span);

    expect(copy).toHaveBeenCalledWith('hello');
  });


  it('should call onCopy callback', () => {
    const span = React.findDOMNode(create(<span>test</span>, 'hello'));

    TestUtils.Simulate.click(span);

    expect(onCopy).toHaveBeenCalledWith('hello');
  });


  it('should be ok if no onCopy callback specified', () => {
    const span = React.findDOMNode(TestUtils
      .renderIntoDocument(<CopyToClipboard text="ok"><span>test</span></CopyToClipboard>));

    expect(TestUtils.Simulate.click.bind(null, span)).not.toThrow();
  });


  it('should pass props to the rendered button', () => {
    const button = TestUtils.renderIntoDocument((
      <CopyToClipboard
        text="hello" onCopy={onCopy}
        className="testClass" style={{display: 'none'}}>
        <button>test</button>
      </CopyToClipboard>
    ));
    const buttonElement = React.findDOMNode(button);

    expect(buttonElement.className).toEqual('testClass');
    expect(buttonElement.style.display).toEqual('none');
    expect(buttonElement.nodeName.toLowerCase()).toEqual('button');
  });
});
 */
