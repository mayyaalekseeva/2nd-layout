var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
}, false);

$(".video-btn").click(function () {
    $(".video-btn").addClass('video-btn--hide');
})
