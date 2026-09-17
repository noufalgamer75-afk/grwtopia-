const search = document.getElementById("search");
const videos = document.querySelectorAll(".video-card");


// SEARCH

search.addEventListener("input", function () {

    const kata = search.value.toLowerCase();

    videos.forEach(function (video) {

        const judul =
            video.querySelector("h2").textContent.toLowerCase();

        const channel =
            video.querySelector("p").textContent.toLowerCase();

        if (
            judul.includes(kata) ||
            channel.includes(kata)
        ) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }

    });

});


// PLAYER

function putarVideo(judul) {

    const player = document.getElementById("videoPlayer");
    const title = document.getElementById("videoTitle");

    title.textContent = judul;

    player.currentTime = 0;

    player.play();

}