document.addEventListener("DOMContentLoaded", function () {
	let contactData = [];

	fetch("/data/contact.json")
		.then((response) => response.json())
		.then((data) => {
			contactData = data;
			updateContacts();
		});

	function updateContacts() {
		let contactsContainer = document.getElementById("contactsContainer");

		contactData.forEach((contact) => {
			let key = Object.keys(contact)[0];
			let value = contact[key];

			if (key === "email") {
				value = `mailto:${value}`;
			}

			contactsContainer.innerHTML += `
				<a href="${value}" target="_blank" class="linkcard flex flexRow alignStart justifyStart" style="width: 100%;">
					<div class="cardContent flex flexRow alignCenter justifyBetween" style="height: calc(100% - 40px); width: calc(100% - 40px); padding: 20px;">
						${key.charAt(0).toUpperCase() + key.slice(1)}
						<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
					</div>
				</a>
			`;
		});
	}
});