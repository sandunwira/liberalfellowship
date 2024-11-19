document.addEventListener("DOMContentLoaded", function () {
	let footer = document.getElementsByTagName("footer")[0];

	Promise.all([
		fetch("/data/pages.json").then(response => response.json()),
		fetch("/data/contact.json").then(response => response.json())
	]).then(([pages, contacts]) => {
		const socialLinks = `
			<a href="${contacts.find(item => item.facebook).facebook}" target="_blank" class="socialLink" title="Facebook">
				<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFFFFF"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
			</a>
			<a href="${contacts.find(item => item.youtube).youtube}" target="_blank" class="socialLink" title="YouTube">
				<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFFFFF"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
			</a>
			<a href="${contacts.find(item => item.instagram).instagram}" target="_blank" class="socialLink" title="Instagram">
				<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFFFFF"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
			</a>
			<a href="${contacts.find(item => item.linkedin).linkedin}" target="_blank" class="socialLink" title="LinkedIn">
				<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFFFFF"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
			</a>
		`;

		const pageLinks = pages.map(page => {
			return `<a href="${page.link}" class="footerLink">${page.name}</a>`;
		}).join('');

		footer.innerHTML = `
			<div class="container flex flexRow m-flexCol">
				<div class="flex flexCol alignStart justifyStart m-alignCenter width-35 m-width-100" style="gap: 30px;">
					<a href="/" style="border-bottom: none;" id="footerLogo">
						<img src="/assets/footer-logo.png" style="height: 110px;" alt="Liberal Fellowship" id="footerLogoImg">
					</a>

					<div class="footerSocialLinks flex alignCenter justifyCenter" style="gap: 20px;">
						${socialLinks}
					</div>
				</div>

				<div class="flex flexCol alignStart justifyStart width-50 m-width-100" style="gap: 30px;">
					<h2>Quick Links</h2>

					<nav class="footerLinks">
						${pageLinks}
					</nav>
				</div>
			</div>

			<div class="footerCopy flex alignCenter justifyCenter">
				<p style="font-size: 14px;">&copy; ${new Date().getFullYear()} Liberal Fellowship. All Rights Reserved.</p>
			</div>
		`;
	});
});