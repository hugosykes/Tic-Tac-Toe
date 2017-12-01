'use strict';
(function(exports) {
  exports.Grid = function() {
    var _boxes = [];

    for(var i=0; i < 9; i++) {
      _boxes[i] = new Box();
    };

    function boxState(index) {
      return _boxes[index].state();
    }

    function setBoxState(index, value) {
      _boxes[index].setState(value);
    }

    return {
      boxState: boxState,
      setBoxState: setBoxState
    };
  };
})(this);
