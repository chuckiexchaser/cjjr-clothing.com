let btns = document.querySelectorAll("#btn");
let cntnts = document.querySelectorAll("#cntnt");
let submit = document.querySelector(".btn");
let currentContent;

let tabChange = (manual) => {
	btns.forEach((btn) => {
		btn.classList.remove("active");

		cntnts.forEach((cntnt) => {
			cntnt.classList.remove("active");
		});
	});

	btns[manual].classList.add("active");
	cntnts[manual].classList.add("active");
};

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		tabChange(i);
		currentContent = i;
	});
});
