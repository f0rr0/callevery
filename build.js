'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callEvery = function callEvery(duration) {
  var delay = _moment2.default.duration(duration).asMilliseconds();
  return function (fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return setInterval.apply(undefined, [fn, delay].concat(args));
  };
};

// const callEveryFiveSeconds = callEvery('00:00:05');
//
// callEveryFiveSeconds(()=> {console.log('WestCoastBestCoast');});

exports.default = callEvery;
