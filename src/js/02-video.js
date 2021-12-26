import throttle from 'lodash.throttle';

const STORAGE_KEY = `videoplayer-current-time`;
const currentTime = localStorage.getItem(STORAGE_KEY);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
   
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.setCurrentTime(currentTime).then(function(seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
