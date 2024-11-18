document.addEventListener("DOMContentLoaded", function () {
	let membersData = [];

	fetch("/data/members.json")
		.then((response) => response.json())
		.then((data) => {
			membersData = data;
			updateMembers();
		});

	function updateMembers() {
		let membersContainer = document.getElementById("membersContainer");

		membersData.forEach((member) => {
			membersContainer.innerHTML += `
				<div class="card flex flexCol alignStart justifyStart">
					<img style="width: 100%; object-fit: cover; object-position: center; aspect-ratio: 1/1;" src="${member.image}" alt="${member.name}">

					<div class="cardContent flex flexCol alignStart justifyStart" style="width: calc(100% - 40px); padding: 20px; gap: 5px;">
						<h4>${member.name}</h4>
						<p style="color: var(--gray); font-size: 14px; font-weight: 300; width: 100%; text-align: center;">${member.position}</p>
					</div>
				</div>
			`;
		});
	}
});