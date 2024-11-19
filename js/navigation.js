document.addEventListener("DOMContentLoaded", function () {
	function createNavigationLinks(container, pages, isMobile = false) {
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
		container.appendChild(logoLink);

		if (isMobile) {
			const dropdownButton = document.createElement("button");
			dropdownButton.className = "dropdownButton";
			dropdownButton.textContent = "Menu";
			container.appendChild(dropdownButton);

			const dropdownContent = document.createElement("div");
			dropdownContent.className = "dropdownContent";

			pages.slice(1).forEach(page => {
				const navLink = document.createElement("a");
				navLink.href = page.link;
				navLink.className = "navLink";
				navLink.textContent = page.name;
				navLink.style.color = "var(--white)";
				dropdownContent.appendChild(navLink);
			});

			container.appendChild(dropdownContent);

			dropdownButton.addEventListener("click", () => {
				dropdownContent.classList.toggle("show");
			});
		} else {
			const navLinks = document.createElement("nav");
			navLinks.className = "navLinks flex alignCenter justifyCenter";

			pages.slice(1, -1).forEach(page => {
				const navLink = document.createElement("a");
				navLink.href = page.link;
				navLink.className = "navLink";
				navLink.textContent = page.name;
				navLinks.appendChild(navLink);
			});

			const actionButton = document.createElement("a");
			actionButton.href = pages[pages.length - 1].link;
			actionButton.className = "whiteBtn";
			actionButton.id = "actionBtn";
			actionButton.textContent = pages[pages.length - 1].name;
			navLinks.appendChild(actionButton);

			container.appendChild(navLinks);
		}
	}

	fetch("/data/pages.json")
		.then(response => response.json())
		.then(pages => {
			const desktopNavigation = document.getElementById("navigation");
			const mobileNavigation = document.getElementById("mobile-navigation");

			const desktopContainer = document.createElement("div");
			desktopContainer.className = "navbarContainer flex alignCenter justifyBetween";
			createNavigationLinks(desktopContainer, pages);
			desktopNavigation.appendChild(desktopContainer);

			const mobileContainer = document.createElement("div");
			mobileContainer.className = "navbarContainer flex alignCenter justifyBetween";
			createNavigationLinks(mobileContainer, pages, true);
			mobileNavigation.appendChild(mobileContainer);
		});
});