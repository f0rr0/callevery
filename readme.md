#callEvery
setInterval on steroids for node.

##Usage
```
npm i -S callevery
```

The package exports a default function which takes a string argument in the format `"hh:mm:ss"`. It returns another function which takes varying number arguments: the function to be called after the set duration and all the arguments to be passed to this function if any.

```javascript
import callEvery from 'callevery';

const callEveryFiveSeconds = callEvery("00:00:05");

const logX = (x, y) => {
 console.log(x);
}

const timer1 = callEveryFiveSeconds(logX, "WestCoast", "BestCoast"); // Logs WestCoastBestCoast every 5 seconds

const timer2 = callEvery("00:00:01")(logX, "a", "b"); // Alternatively

clearInterval(timer1);
clearInterval(timer2);
```
