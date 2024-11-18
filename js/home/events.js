document.addEventListener("DOMContentLoaded", function () {
	let eventsData = [];

	fetch("/data/events.json")
		.then((response) => response.json())
		.then((data) => {
			eventsData = data;
			updateEventsHome();
		});

	function updateEventsHome() {
		let homeEventsContainer = document.getElementById("homeEventsContainer");

		eventsData.slice(-4).reverse().forEach((event) => {
			homeEventsContainer.innerHTML += `
				<div class="card flex flexCol alignStart justifyStart">
					<img style="width: 100%; object-fit: cover; object-position: center; aspect-ratio: 4/3;" src="${event.image}" alt="${event.title}">

					<div class="cardContent flex flexCol alignStart justifyStart" style="width: calc(100% - 40px); padding: 20px; gap: 15px;">
						<h3 style="font-size: 20px;">${event.title}</h3>
						<span class="flex flexCol" style="gap: 5px;">
							<span class="flex flexRow alignCenter" style="gap: 10px;">
								<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#DF6B00"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
								<p style="color: var(--gray); font-size: 14px; font-weight: 300;">${event.date}</p>
							</span>
							<span class="flex flexRow alignCenter" style="gap: 10px;">
								<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#DF6B00"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
								<p style="color: var(--gray); font-size: 14px; font-weight: 300;">${event.location}</p>
							</span>
							<span class="flex flexRow alignCenter" style="gap: 10px;">
								<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#DF6B00"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12h3.5" /><path d="M12 7v5" /></svg>
								<p style="color: var(--gray); font-size: 14px; font-weight: 300;">${event.time}</p>
							</span>
						</span>
					</div>
				</div>
			`;
		});
	}
});