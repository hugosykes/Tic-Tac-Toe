'use strict';
(function(exports) {
  exports.Box = function() {

    var _state = 'empty';

    function state() {
      return _state;
    }

    function setState(state) {
      _state = state;
    }

    return {
      state: state,
      setState: setState
    };
  };
})(this);
