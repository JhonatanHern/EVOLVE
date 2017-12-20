const destinySection = document.getElementById('detalles'),
	oldSection = document.getElementById('proyecto')

document.addEventListener('DOMContentLoaded',function() {
	let elements = Array.from(document.getElementsByClassName('contact-switcher'))
	elements.forEach(function(e) {
		e.addEventListener('click',function() {
			let target = e.getAttribute('target')
			console.log(target)
			destinySection.style.display = "block"
			document.getElementById(target).style.display = "block"
			oldSection.style.display = "none"
		})
	})
})