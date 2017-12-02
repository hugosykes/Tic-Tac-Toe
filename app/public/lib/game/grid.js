'use strict';
(function(exports) {
  exports.Grid = function() {
    var _boxes = [];

    for(var i=0; i < 9; i++) {
      _boxes[i] = new Box();
    };

    function boxState(index) {
      return _boxes[index - 1].state();
    }

    function setBoxState(index, value) {
      _boxes[index - 1].setState(value);
    }

    return {
      boxState: boxState,
      setBoxState: setBoxState
    };
  };
})(this);
