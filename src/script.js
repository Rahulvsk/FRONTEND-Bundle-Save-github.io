function toggleBox(element) {
    document.querySelectorAll(".box").forEach((box) => box.classList.remove("active"));
    element.classList.add("active");
    let radioButton = element.querySelector("input[type='radio']");
    if (radioButton) {
        radioButton.checked = true;
    }
}