const iframe = document.getElementById("soundcloud-player");
const player = SC.Widget(iframe);
const img = document.querySelector(".img-content img:first-child");

img.addEventListener("animationstart", () => {
  const iframeTag = document.createElement("iframe");

  iframeTag.id = "soundcloud-player";
  iframeTag.width = "100%";
  iframeTag.height = "166";
  iframeTag.frameborder = "no";
  iframeTag.allow = "autoplay";
  iframeTag.src =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1827478203&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false";
  iframeTag.style.display = "none";
  document.body.appendChild(iframeTag);
  const player = SC.Widget(iframeTag);

  player.bind(SC.Widget.Events.READY, () => {
    player.play();
  });
});
