'use stick';

let modal = document.getElementById("hidden");
let openModal = document.getElementById("btn_modal_window");
let closeModal = document.getElementsByClassName("close_modal_window")[0];


closeModal.addEventListener('click', function() {
		modal.style.display = "none";
});

openModal.addEventListener('click', function() {
	modal.style.display = "block";
});

window.addEventListener('click', function(event) {
	if (event.target == modal) {
        modal.style.display = "none";
    }
});