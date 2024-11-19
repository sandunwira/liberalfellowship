document.addEventListener("DOMContentLoaded", function () {
	let galleryData = [];

	fetch("/data/gallery.json")
		.then((response) => response.json())
		.then((data) => {
			galleryData = data;
			updateGallery();
		});

	function updateGallery() {
		let galleryContainer = document.getElementById("galleryContainer");

		galleryData.reverse().forEach((photo) => {
			galleryContainer.innerHTML += `
				<div class="card flex flexCol alignStart justifyStart">
					<img style="width: 100%; object-fit: cover; object-position: center; aspect-ratio: 1/1;" src="${photo.image}" alt="${photo.title}" title="${photo.title}">
				</div>
			`;
		});
	}
});