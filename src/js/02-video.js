import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(date) {
  //  console.log(date)
   const save = JSON.stringify(date);
   localStorage.setItem('videoplayer-current-time', save);
 };

 player.on('timeupdate', throttle(onPlay, 1000));

 const currentTime = JSON.parse(
   localStorage.getItem('videoplayer-current-time')
 );
 console.log(currentTime);

 player
 .setCurrentTime(currentTime.seconds)
 .then(function (seconds) {
   console.log(seconds);
 })
 .catch(function (error) {
   switch (error.name) {
     case 'RangeError':
       // the time was less than 0 or greater than the video’s duration
       break;

     default:
       // some other error occurred
       break;
   }
 });

