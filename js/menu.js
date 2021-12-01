var menuHam = document.getElementById("menuHam");
var menuMain = document.getElementById("menuMain");

if(menuHam != null && menuMain != null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'l-header-nav') {
			menuMain.className = 'l-header-nav is-active';
		}
		else {
			menuMain.className = 'l-header-nav';
		}
	});
}