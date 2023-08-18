console.log("funfa");

const card = document.querySelectorAll(".card");
const acti = document.querySelectorAll(".active");

card.forEach(card => {
	card.addEventListener('click', () => {
		console.log(card);
		remActive();
		card.classList.add("active");
	})
});

function remActive(){
	card.forEach(card => {
		card.classList.remove("active");
	})
}