const URL_TO_GENERATE = "https://aryanxdportfolio.netlify.app/";
const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(URL_TO_GENERATE)}`;

const qrImg = document.getElementById("qrImg");
qrImg.src = qrApi;

document.getElementById("urlTooltip").innerText = URL_TO_GENERATE;




qrImg.onclick = () => {
    window.location.href = URL_TO_GENERATE;
};


document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText(URL_TO_GENERATE);
    alert("URL copied to clipboard!");
};


document.getElementById("downloadBtn").onclick = async () => {
    const response = await fetch(qrApi);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "aryan-portfolio-qr.png";
    a.click();

    URL.revokeObjectURL(url);
};
