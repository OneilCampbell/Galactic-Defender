	// --------------------------------------------
	//                  HISTORY
	// --------------------------------------------
	
	
	//*************** Cycle Gifs ****************
	
	let filepath2 = "../GIFs/rangers/";
	let incrementer = 0;
	let banner7 = document.getElementById('banner7');
	
	//run a continuous loop of gifs kind of like a slideshow to give appearance of continuity
	const cycle = () => {

		if (incrementer == 0){
			banner7.style.background = "url(" + filepath2 + "rangersFighting1.gif";
			banner7.style.backgroundSize = "cover";
			banner7.style.backgroundRepeat = "no-repeat";
			incrementer++;
			clearInterval(cycleThrough);
			cycleThrough = setInterval(cycle, 3000);
		}

		else if (incrementer == 1){
			banner7.style.background = "url(" + filepath2 + "rangersFighting2.gif";
			banner7.style.backgroundSize = "cover";
			banner7.style.backgroundRepeat = "no-repeat";
			incrementer++;
		}

		else{
			banner7.style.background = "url(" + filepath2 + "rangersLanding2.gif";
			banner7.style.backgroundSize = "cover";
			banner7.style.backgroundRepeat = "no-repeat";
			incrementer = 0;
			clearInterval(cycleThrough);
			cycleThrough = setInterval(cycle, 2500);
		}
	}
	
	let cycleThrough = setInterval(cycle, 2500);