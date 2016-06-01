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

// const callEveryFiveSeconds = callEvery("00:00:05");
//
// const logX = (x, y) => {
//  console.log(x+y);
// }

// const timer1 = callEveryFiveSeconds(logX, "WestCoast", "BestCoast"); // Logs WestCoastBestCoast every 5 seconds
//
// const timer2 = callEvery("00:00:01")(logX, "a", "b"); // Alternatively
//
// clearInterval(timer1);
// clearInterval(timer2);

exports.default = callEvery;
