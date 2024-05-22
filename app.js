const iframe = document.getElementById('soundcloud-player');
const player = SC.Widget(iframe);
const img = document.querySelector('.img-content img:first-child');

img.addEventListener('animationstart', () => {
  player.play();
});

player.bind(SC.Widget.Events.FINISH, () => {
  player.seekTo(0);
  player.play();
});