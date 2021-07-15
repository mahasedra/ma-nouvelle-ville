/* document.getScroll = function () {
	if (window.pageYOffset != undefined) {
		return [pageXOffset, pageYOffset];
	} else {
		var sx,
			sy,
			d = document,
			r = d.documentElement,
			b = d.body;
		sx = r.scrollLeft || b.scrollLeft || 0;
		sy = r.scrollTop || b.scrollTop || 0;
		return [sx, sy];
	}
};
 */
window.addEventListener("scroll", function (e) {
	const y = window.scrollY;
	const el = document.querySelector(".navbar");
	console.log("here");
	if (y > 100) {
		el.classList.add("navbar--scrolled");
	} else el.classList.remove("navbar--scrolled");
});
