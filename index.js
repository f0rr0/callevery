import moment from 'moment';

const callEvery = (duration) => {
  const delay = moment.duration(duration)
   .asMilliseconds();
  return (fn, ...args) => {
    return setInterval(fn, delay, ...args);
  };
};

// const callEveryFiveSeconds = callEvery('00:00:05');
//
// callEveryFiveSeconds(()=> {console.log('WestCoastBestCoast');});

export default callEvery;
