const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const container = document.getElementById("qr-container");
const input = document.getElementById("text");

generateBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (!text) {
        alert("Please enter text or URL");
        return;
    }

    container.innerHTML = "";

    QRCode.toCanvas(text, { width: 250 }, function (err, canvas) {
        if (err) {
            console.error(err);
            return;
        }

        container.appendChild(canvas);
        downloadBtn.classList.remove("hidden");
    });
});

downloadBtn.addEventListener("click", () => {
    const canvas = document.querySelector("canvas");

    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "qr.png";
    link.href = canvas.toDataURL();
    link.click();
});