const video = document.querySelector('video');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const muteBtn = document.getElementById('mute');
const closeBtn = document.getElementById('closeBtn');
const dancingElements= document.querySelectorAll('.rounded-image, .rounded-image-flipped')






 //play of pause the video
playPauseBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = 'Pause';   
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

video.addEventListener('play', () => {
  dancingElements.forEach(el => el.classList.add('is-dancing'));
    playPauseBtn.querySelector('.icon').innerHTML = '&#10074;&#10074;'; // Pause icon (❚❚)
    playPauseBtn.querySelector('.text').textContent = 'Pause';
});


// Stop animation on all dancing elements
video.addEventListener('pause', () => {
    dancingElements.forEach(el => el.classList.remove('is-dancing'));
    playPauseBtn.querySelector('.text').textContent = 'Play';
});
  

video.addEventListener('ended', () => {
    dancingElements.forEach(el => el.classList.remove('is-dancing'));
    playPauseBtn.querySelector('.icon').innerHTML = '&#9654;';
    playPauseBtn.querySelector('.text').textContent = 'Play';
    
});



//mute or unmute the video
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
    muteBtn.querySelector('.icon').innerHTML = video.muted ? '&#128266;' : '&#128263;';
    muteBtn.querySelector('.text').textContent = video.muted ? 'Unmute' : 'Mute';
});


closeBtn.addEventListener('click', () => {
    video.pause(); // Pause playback
    video.currentTime = 0; // Optional: Reset video to beginning
    dancingElements.forEach(el => el.classList.remove('is-dancing')); // Stop animation
   container.classList.add('hidden');
});

const grid = document.querySelector('.image-grid');
const overlay = document.getElementById('zoomOverlay');
const zoomedImage = document.getElementById('zoomedImage');


      // Open zoom overlay on grid image click
      grid.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
          zoomedImage.src = e.target.src;
          zoomedImage.alt = e.target.alt;
          overlay.classList.add('active');
        }
      });

      // Close modal on close button click
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
      });

      // Close modal when clicking anywhere outside the zoomed image
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });


