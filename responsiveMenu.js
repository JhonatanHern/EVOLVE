(function() {
	const responsiveSize = 700//px
	let responsiveMenu = {
		icon:document.getElementById('menuIcon'),
		ul:document.getElementById('deployMenu')
	}
	responsiveMenu.icon.addEventListener('click',function() {
		if (window.innerWidth >= responsiveSize)
			return
		let style = responsiveMenu.ul.style
		style.marginLeft = style.marginLeft === "0%" ? "-100%" : "0%" ;
	})
	window.addEventListener("resize",function() {
		if (window.innerWidth >= responsiveSize)
			responsiveMenu.ul.style.marginLeft = "0%"
	})
})()