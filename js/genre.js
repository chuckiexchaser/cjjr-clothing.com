let sizes = document.querySelectorAll(".size-btn");
let colors = document.querySelectorAll(".color-btn");
let currentSize;
let currentColor;

let selectionSize = (manual) => {
	sizes.forEach((size) => {
		size.classList.remove("active");
	});

	sizes[manual].classList.add("active");
};

let selectionColor = (manual) => {
	colors.forEach((color) => {
		color.classList.remove("active");
	});

	colors[manual].classList.add("active");
};

sizes.forEach((size, i) => {
	size.addEventListener("click", () => {
		selectionSize(i);
		currentContent = i;
	});
});

colors.forEach((color, i) => {
	color.addEventListener("click", () => {
		selectionColor(i);
		currentContent = i;
	});
});

// POP UP MODAL : CART

let modalBtn = document.querySelector(".modal");
let modalBg = document.querySelector(".modal-bg");
let modalX = document.querySelector(".cart-exit");

// Enter

modalBtn.addEventListener("click", () => {
	modalBg.style.transform = "scale(1)";
});

// Exit

modalX.addEventListener("click", () => {
	modalBg.style.transform = "scale(0)";
});

function keyMinimize() {
	if (event.key === "Escape") {
		modalBg.style.transform = "scale(0)";
	}
}
