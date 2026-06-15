const manualButton = document.getElementById("manualButton");
const autoButton = document.getElementById("autoButton");
const message = document.getElementById("message");

manualButton.addEventListener("click", () => {
    message.textContent = "Manual Locate selected.";
});

autoButton.addEventListener("click", () => {
    message.textContent = "Auto Locate selected.";
});
