function handleScrollDown() {
	if (window.scrollY > 20) {
		if (!document.body.classList.contains('scrolled')) {
			document.body.classList.add('scrolled');
		}
	} else {
		if (document.body.classList.contains('scrolled')) {
			document.body.classList.remove('scrolled');
		}
	}
}

export { handleScrollDown };
