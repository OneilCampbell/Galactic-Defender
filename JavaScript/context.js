// --------------------------------------------
//                  CONTEXT
// --------------------------------------------

	//nav bar at top, set color of link of current page to red to show active page
	let pageLinks = document.getElementsByClassName('pLink');
	let pageTitle = document.getElementById('mTitle');
	for(let i = 0; i < pageLinks.length; i++){
		if (pageLinks[i].innerHTML === pageTitle.innerHTML){
			pageLinks[i].style.color = "red";
		}
	}

	//insert players name in preset places
	let insertName = document.getElementsByClassName('insert');
	for(let j = 0; j < insertName.length; j++){
		insertName[j].innerHTML += localStorage.getItem("playerName");
	}

	let callToAction = document.getElementById('actionCall');
	callToAction.innerHTML = localStorage.getItem("playerName");

	// localStorage.removeItem("playerName");