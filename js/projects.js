document.addEventListener("DOMContentLoaded", function () {
	let projectsData = [];

	fetch("/data/projects.json")
		.then((response) => response.json())
		.then((data) => {
			projectsData = data;
			updateProjectsHome();
		});

	function updateProjectsHome() {
		let projectsContainer = document.getElementById("projectsContainer");

		projectsData.reverse().forEach((project) => {
			projectsContainer.innerHTML += `
				<div class="card flex flexCol alignStart justifyStart">
					<img style="width: 100%; object-fit: cover; object-position: center; aspect-ratio: 4/3;" src="${project.image}" alt="${project.title}">

					<div class="cardContent flex flexCol alignStart justifyStart" style="width: calc(100% - 40px); padding: 20px; gap: 15px;">
						<h3><a href="${project.link}">${project.title}</a></h3>
						<span>
							<p style="display: -webkit-box; line-clamp: 5; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${project.description}</p>
							<a href="${project.link}" style="color: var(--accent); border-bottom: none;">read more</a>
						</span>
					</div>
				</div>
			`;
		});
	}
});