function goTo(path) {
    window.open(path, "_blank");
}


function downloadFile(filePath) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = ""; // forces download instead of opening
    link.click();
}
