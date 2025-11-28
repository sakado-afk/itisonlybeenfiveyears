

//liste des élements ? 
const wrapper = document.querySelector(".wrapper"),
playPauseBtn = wrapper.querySelector(".play-pause");

//progress bar


//play music function
function associerMusique(imageId, musiqueSrc, imageInitale, imagePause, progressBarId) {
  const image = document.getElementById(imageId);
  const audio = new Audio(musiqueSrc);
const progressBar= document.getElementById(progressBarId);
const progressContainer = progressBar.parentElement;
  //image initiale par défaut 
  image.src=imageInitale;

  image.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      image.src= imagePause;
    } else {
      audio.pause();
      image.src=imageInitale;
  }
});

audio.addEventListener("timeupdate",()=>{
    if (audio.duration){
const progressPercent = (audio.currentTime / audio.duration)*100;
 progressBar.style.width = progressPercent + "%";
}
});

// clic sur la barre de progression
  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;        // position du clic dans le conteneur
    const width = rect.width;
    const percent = clickX / width;              // entre 0 et 1
    if (audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  });
}

//associer toutes les images aux musiques 
associerMusique("bugplay", "audio1/boyswillbebugs.mp3","image/play.png", "image/pause.png", "progressbug");
associerMusique("malaga", "audio1/malagasy.mp3", "image/play.png", "image/pause.png", "progressmala");
associerMusique("playsour", "audio1/sweet.mp3", "image/play.png", "image/pause.png", "progresssour");
associerMusique("playpretty", "audio/pretty.mp3", "image/play.png", "image/pause.png", "progresspretty");
associerMusique("playgosse", "audio/gosse.mp3", "image/play.png", "image/pause.png", "progressgosse");
associerMusique("playcreep", "audio/creep.mp3","image/play.png", "image/pause.png", "progresscreep");
associerMusique("playlove", "audio/love.mp3", "image/play.png", "image/pause.png", "progresslove");
associerMusique("playsurface", "audio/surface.mp3", "image/play.png", "image/pause.png", "progresssurface");
associerMusique("playcumulus", "audio/cumulus.mp3", "image/play.png", "image/pause.png", "progresscumulus");
associerMusique("playdance", "audio/dance.mp3","image/play.png", "image/pause.png", "progressdance");
associerMusique("playfix", "audio/fix.mp3", "image/play.png", "image/pause.png", "progressfix");
associerMusique("playletalu", "audio/letalu.mp3", "image/play.png", "image/pause.png", "progressletalu");
associerMusique("playclimat", "audio/climat.mp3", "image/play.png", "image/pause.png", "progressclimat");
associerMusique("playpowfu", "audio/powfu.mp3", "image/play.png", "image/pause.png", "progresspowfu");
associerMusique("playforever", "audio/forever.mp3", "image/play.png", "image/pause.png", "progressforever");


