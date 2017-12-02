'use strict'
describe('Grid', function() {
  var grid;

  beforeEach(() => {
    grid = new Grid();
  });

  it('should contain an array (containing boxes)', () => {
    for(var i=1; i <= 9; i++) {
      expect(grid.boxState(i)).toBe('empty');
    }
  });

  it("should be able to change the state of it's boxes", () => {
    for(var i=1; i <= 9; i++) {
      grid.setBoxState(i, 'X');
      expect(grid.boxState(i)).toEqual('X');
    }
    
    for(var i=1; i <= 9; i++) {
      grid.setBoxState(i, 'O');
      expect(grid.boxState(i)).toEqual('O');
    }
  });
});