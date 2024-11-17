let maintenanceMode = true;

if (maintenanceMode) {
	document.addEventListener("DOMContentLoaded", () => {
		document.body.innerHTML = `
			<div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px;">
				<h1 style="font-size: 50px; color: var(--accent); text-align: center;">Under Construction</h1>
				<p style="font-size: 20px; color: var(--black); text-align: center;">We are currently working on our website. Please check back later.<br>Meanwhile, you can follow us on our social media platforms</p>
				<div class="flex flexRow alignCenter justifyCenter" style="gap: 20px;">
					<a href="https://www.facebook.com/liberalfellowship" target="_blank" class="socialLink">
						<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#DF6B00"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
					</a>
					<a href="https://www.instagram.com/liberal_fellowship" target="_blank" class="socialLink">
						<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#DF6B00"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
					</a>
					<a href="https://linkedin.com/company/liberal-fellowship" target="_blank" class="socialLink">
						<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#DF6B00"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
					</a>
				</div>
			</div>
		`;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	window.onscroll = function () { scrollFunction() };

	function scrollFunction() {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			document.getElementById("navLogoImg").src = "/assets/logo.png";

			document.getElementById("navigation").style.background = "var(--white)";
			document.getElementById("navigation").style.color = "var(--black)";
			document.getElementById("navigation").style.borderBottom = "1px solid var(--gray)";
			document.getElementById("navigation").style.transition = "0.3s";

			document.querySelectorAll(".navLink").forEach((link) => {
				link.style.color = "var(--black)";
			});

			document.getElementById("actionBtn").classList.remove("whiteBtn");
			document.getElementById("actionBtn").classList.add("accentBtn");

			document.getElementById("navLogo").style.color = "var(--black)";
		} else {
			document.getElementById("navLogoImg").src = "/assets/logo-white.png";

			document.getElementById("navigation").style.background = "transparent";
			document.getElementById("navigation").style.color = "var(--white)";
			document.getElementById("navigation").style.borderBottom = "none";
			document.getElementById("navigation").style.transition = "0.3s";

			document.querySelectorAll(".navLink").forEach((link) => {
				link.style.color = "var(--white)";
			});

			document.getElementById("actionBtn").classList.remove("accentBtn");
			document.getElementById("actionBtn").classList.add("whiteBtn");

			document.getElementById("navLogo").style.color = "var(--white)";
		}
	}

	scrollFunction();
});