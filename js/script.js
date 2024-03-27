document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('webcam');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                videoElement.srcObject = stream;
            })
            .catch(function (err) {
                console.log("Something went wrong!", err);
            });
    }
});
