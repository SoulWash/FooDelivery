const playButton = document.querySelector('span.play');
const exitButton = document.querySelector('#exit');
const video = document.querySelector(".video");

function playVideo(){
    video.classList.toggle("hidden");
}


function removeVideo(){
    video.classList.add("hidden");
}

playButton.addEventListener('click', playVideo)
exitButton.addEventListener('click', removeVideo)

