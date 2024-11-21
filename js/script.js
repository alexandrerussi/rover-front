document.addEventListener('DOMContentLoaded', async (event) => {
    const videoElement1 = document.getElementById('rover_webcam');
    const videoElement2 = document.getElementById('astronaut_webcam');

    try {
        // Obter a lista de dispositivos de vídeo (câmeras)
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        // Verificar se existem pelo menos duas câmeras
        if (videoDevices.length >= 2) {
            // Acessar a primeira câmera
            const stream1 = await navigator.mediaDevices.getUserMedia({ video: { deviceId: videoDevices[0].deviceId } });
            videoElement1.srcObject = stream1;

            // Acessar a segunda câmera
            const stream2 = await navigator.mediaDevices.getUserMedia({ video: { deviceId: videoDevices[1].deviceId } });
            videoElement2.srcObject = stream2;
        } else {
            console.log("Não há câmeras suficientes disponíveis");
        }
    } catch (err) {
        console.error("Erro ao acessar as câmeras", err);
    }
});
