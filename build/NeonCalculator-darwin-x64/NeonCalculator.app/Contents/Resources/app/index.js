document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
    const dateContainer = document.getElementById("current-date");

    let currentInput = "";
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (this.classList.contains("clear")) {
                currentInput = "";
                display.value = "";
            } else if (this.classList.contains("equal")) {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch {
                    display.value = "Error";
                    currentInput = "";
                }
            } else {
                if (shouldResetDisplay) {
                    display.value = value;
                    shouldResetDisplay = false;
                } else {
                    display.value += value;
                }
                currentInput += value;
            }
        });
    });

    function updateDate() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateContainer.innerText = date.toLocaleDateString('en-US', options);
    }

    updateDate();
    setInterval(updateDate, 60000);
});
