'use strict'
describe('Box', function() {
  var box;

  beforeEach(() => {
    box = new Box();
  });

  it('should have state of empty', () => {
    expect(box.state()).toBe('empty');
  });

  it('should have state X when setState method is called', () => {
    box.setState('X');
    expect(box.state()).toBe('X');
  });
  
});