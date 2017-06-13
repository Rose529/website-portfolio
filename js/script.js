var topNavList = document.querySelector('#top-nav-list');
var topNavToggle = document.querySelector('#top-nav-toggle');
var navCollapsed = true;

topNavToggle.addEventListener('click', function(){
	if (navCollapsed === true) {
				topNavList.classList.remove('nav-list-collapsed');
				topNavToggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
				navCollapsed = false;
	} else {
		topNavList.classList.add('nav-list-collapsed');
		topNavToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
		navCollapsed = true;
	}
});


// https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=2&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.9716728699901562,0.5500916217043577,1,0.5005833757509655,0.7697700743374646,0.91,0.7534590199914224,1,0.6000916217043577,0.91,0.7840333609602942,0.6111988756668401,1,0.5500916217043577,0.9927810004339753&swatchOrder=0,1,2,3,4