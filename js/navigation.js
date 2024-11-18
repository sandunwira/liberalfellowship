document.addEventListener("DOMContentLoaded", function () {
	fetch("/data/pages.json")
		.then((response) => response.json())
		.then((pages) => {
			const navigation = document.getElementById("navigation");
			const navbarContainer = document.createElement("div");
			navbarContainer.className = "navbarContainer flex alignCenter justifyBetween";

			// Create logo link
			const logoLink = document.createElement("a");
			logoLink.href = pages[0].link;
			logoLink.className = "flex flexRow alignCenter";
			logoLink.style.color = "var(--white)";
			logoLink.style.borderBottom = "none";
			logoLink.style.gap = "10px";
			logoLink.id = "navLogo";
			logoLink.innerHTML = `
                <img src="/assets/logo-white.png" alt="Liberal Fellowship" id="navLogoImg">
                <h1 style="font-size: 22px;">Liberal Fellowship</h1>
            `;
			navbarContainer.appendChild(logoLink);

			// Create nav links
			const navLinks = document.createElement("nav");
			navLinks.className = "navLinks flex alignCenter justifyCenter";

			pages.slice(1, -1).forEach(page => {
				const navLink = document.createElement("a");
				navLink.href = page.link;
				navLink.className = "navLink";
				navLink.textContent = page.name;
				navLinks.appendChild(navLink);
			});

			// Create action button
			const actionButton = document.createElement("a");
			actionButton.href = pages[pages.length - 1].link;
			actionButton.className = "whiteBtn";
			actionButton.id = "actionBtn";
			actionButton.textContent = pages[pages.length - 1].name;
			navLinks.appendChild(actionButton);

			navbarContainer.appendChild(navLinks);
			navigation.appendChild(navbarContainer);
		});
});