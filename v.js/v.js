/*
    script made for detecting whether an element is visible in the screen or not
    Copyright (C) <year> <name of author>

    This program is free software; you can redistribute it and/or modify it under
    the terms of the GNU General Public License as published by the Free Software Foundation;
    either version 2 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program;
    if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston,
    MA 02111-1307 USA
*/
(function(){
	let elementInViewport = function(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}
	let targets
	let checkAll = function() {
		targets.forEach(function(e) {
			if(elementInViewport(e))
				e.classList.add('j-animated')
		})
	}
	document.addEventListener("DOMContentLoaded", function(event) {
		targets = Array.from(document.getElementsByClassName('j-animate'))
		document.addEventListener("scroll",function(){
			checkAll()
		})
		checkAll()
	})
})()