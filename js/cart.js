var cart = document.querySelector(".modal");
var container = document.querySelector(".modal-content");
var button = document.getElementsByClassName("options");

var totalTxt = document.querySelector(".cart-total");
var value = 9.99;
var total = 0;

for (but of button) {
	but.addEventListener("click", (e) => {
		// Pop up number
		var add = Number(cart.getAttribute("data-count") || 0);
		cart.setAttribute("data-count", add + 1);
		cart.classList.add("zero");
		total += 1;

		console.log(total);

		// copy and paste element
		var parent = e.target.parentNode;

		while (parent && !parent.previousElementSibling && !parent.nextElementSibling) {
			parent = parent.parentNode;
		}

		var ancestor = parent.parentNode;
		var greatAncestor = ancestor.parentNode;

		var clone = greatAncestor.cloneNode(true);
		container.appendChild(clone);

		totalTxt.innerHTML = "$" + value * total;
	});
}
