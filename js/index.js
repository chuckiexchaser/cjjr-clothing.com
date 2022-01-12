let imgs = document.querySelectorAll(".cc-img");
let navs = document.querySelectorAll(".cc-div");
let currentImg = 1;

// Manual Navigation

let manualNav = function (manual) {
	imgs.forEach((img) => {
		img.classList.remove("active");

		navs.forEach((nav) => {
			nav.classList.remove("active");
		});
	});

	imgs[manual].classList.add("active");
	navs[manual].classList.add("active");
};

navs.forEach((nav, i) => {
	nav.addEventListener("click", () => {
		manualNav(i);
		currentImg = i;
	});
});

// Auto Navigation

let auto = function (active) {
	var active = document.getElementsByClassName("active");
	var i = 1;

	var autoplay = () => {
		setTimeout(function () {
			[...active].forEach((activeImg) => {
				activeImg.classList.remove("active");
			});

			imgs[i].classList.add("active");
			navs[i].classList.add("active");
			i++;

			if (imgs.length == i) {
				i = 0;
			}

			if (i >= imgs.length) {
				return;
			}

			autoplay();
		}, 5000);
	};
	autoplay();
};
auto();
