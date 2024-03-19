// --------------------------- button 2  --------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const btn2 = document.querySelector(".btn-2");

  btn2.addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.textContent = "On";
      this.style.backgroundColor = "rgb(39 206 52)";
      this.style.borderColor = "rgb(3 135 3)";
      this.style.boxShadow = "0px 2px 2px -1px rgb(3 135 3)";
    } else {
      this.textContent = "Off";
      this.style.backgroundColor = "";
      this.style.borderColor = "";
      this.style.boxShadow = "";
    }
  });
});

// ---------------------------  button 3  ---------------------------//
function handleSubmit() {
  const btn3 = document.querySelector(".btn-3");
  const spinner = document.createElement("div");
  spinner.className = "spinner";
  btn3.innerHTML = "";
  btn3.appendChild(spinner);

  // Clear the spinner and add the thick bar after the spinning animation
  setTimeout(function () {
    btn3.innerHTML = "";
    const checkMark = document.createElement("div");
    checkMark.className = "check-mark";
    checkMark.textContent = "✔";
    btn3.appendChild(checkMark);
  }, 3000);
}

// ---------------------------  button 4  ---------------------------//
function handleClick() {
  const btn = document.querySelector(".btn-4");

  // Create bubbles
  const bubblesContainer = document.createElement("div");
  bubblesContainer.className = "bubbles-container";
  btn.appendChild(bubblesContainer);

  for (let i = 0; i < 8; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble b-" + i;
    bubble.textContent = "°";
    bubble.classList.add("animation-" + i);
    bubblesContainer.appendChild(bubble);
  }

  // After a delay, reset the button scale
  setTimeout(() => {
    bubblesContainer.remove();
  }, 500); // Adjust delay as needed
}

// ---------------------------  button 6  -----------------------------//
document.querySelector(".btn-6").addEventListener("click", function () {
  this.classList.add("clicked");
  setTimeout(() => {
    this.textContent = "I am clicked";

    setTimeout(() => {
      this.classList.add("back");

      setTimeout(() => {
        this.classList.remove("clicked");
        this.classList.remove("back");

        setTimeout(() => {
          this.textContent = "click me";
        }, 1000);
      }, 1400);
    }, 2000);
  }, 1000);
});
