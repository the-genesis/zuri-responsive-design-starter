//This contains only stuff for the 
//responsive navigation

var navIcon = document.getElementById("nav-icon");
var navIconContainer = document.querySelector(".nav-icon-container");
var navIconTop = document.querySelector(".nav-icon-top");
var navIconBottom = document.querySelector(".nav-icon-bottom");
var mobileMenu = document.querySelector(".mobile-menu-container");

var mobileMenuIsOpen = false;

navIcon.addEventListener("click", function() {

	if (mobileMenuIsOpen == false) {
		openMobileMenu();
	}
	else {
		closeMobileMenu();
	}
});

function openMobileMenu() {
	navIcon.className = "clicked";
	navIconTop.classList.add("top-clicked");
	navIconBottom.classList.add("bottom-clicked");

	mobileMenu.classList.add("mobile-menu-out");
    navIconContainer.classList.add("open-nav-icon");

	mobileMenuIsOpen = true;
}

function closeMobileMenu() {
	navIcon.className = "unclicked";
	navIconTop.classList.remove("top-clicked");
	navIconBottom.classList.remove("bottom-clicked");

	mobileMenu.classList.remove("mobile-menu-out");
    navIconContainer.classList.remove("open-nav-icon");

	mobileMenuIsOpen = false;
}




