	// --------------------------------------------
	//                 CHARACTERS
	// --------------------------------------------

	//nav bar at top, set color of link of current page to red to show active page
	let pageLinks = document.getElementsByClassName('pLink');
	let pageTitle = document.getElementById('cTitle');
	for(let i = 0; i < pageLinks.length; i++){
		if (pageLinks[i].innerHTML === pageTitle.innerHTML){
			pageLinks[i].style.color = "red";
		}
	}

	//get pictures of rangers
	let heroes = document.getElementsByClassName('rangers');

	//five images being displayed at once, so get the divs and set the index
	let farLeft = document.getElementById('farLeft');
	let leftIndex = 5;

	let left = document.getElementById('nextLeft');
	let prevIndex = 6;

	let mid = document.getElementById('front');
	let index;

	let right = document.getElementById('nextRight');
	let nextIndex = 1;

	let farRight = document.getElementById('farRight');
	let rightIndex = 2;

	//hide all the images
	for(index = 0; index < heroes.length; index++){
		heroes[index].style.display = "none";
	}

	//reset index
	index = 0;

	//automatic slide show
	const slideshow = () => {

		if (leftIndex == heroes.length){
			leftIndex = 0;
		}

		farLeft.setAttribute("src", heroes[leftIndex].getAttribute('src'));
		leftIndex++;
		
		if (prevIndex == heroes.length){
			prevIndex = 0;
		}

		left.setAttribute("src", heroes[prevIndex].getAttribute('src'));
		prevIndex++;
		
		if (index == heroes.length){
			index = 0;
		}

		mid.setAttribute("src", heroes[index].getAttribute('src'));
		index++;
		
		if (nextIndex == heroes.length){
			nextIndex = 0;
		}

		right.setAttribute("src", heroes[nextIndex].getAttribute('src'));
		nextIndex++;
		
		if (rightIndex == heroes.length){
			rightIndex = 0;
		}

		farRight.setAttribute("src", heroes[rightIndex].getAttribute('src'));
		rightIndex++;

	}

	let startSlideShow = setInterval(slideshow, 2000);