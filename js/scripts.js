const fullImgModal = document.querySelector('.full-img-modal');
const fullImg = document.querySelector('#full-img');
const closeGallery = document.querySelector('.close-gallery');

function openFullImgModal(photo) {
	fullImgModal.style.display = "flex";
	fullImg.src = photo;
}

function closeFullImgModal() {
	fullImgModal.style.display = "none";
}

window.addEventListener('click', function(event) {
	if (event.target == fullImgModal) {
		fullImgModal.style.display = "none";
		}
});


