import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onThrottle, 1000));

function onThrottle({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
