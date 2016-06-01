import moment from 'moment';

const callEvery = (duration) => {
  const delay = moment.duration(duration)
   .asMilliseconds();
  return (fn, ...args) => {
    return setInterval(fn, delay, ...args);
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


export default callEvery;
