	// --------------------------------------------
	//                 GALLERY
	// --------------------------------------------
	let filepath3 = "../Images/noBackground/";

	let heroCharacters = document.getElementById('heroes');
	let heroFilepath = "heroes/";
	let heroArray = ["whiteRanger.png", "redRanger.png", "blueRanger.png", "greenRanger.png", 
					 "pinkRanger.png", "yellowRanger.png", "blackRanger.png"];

	let villainCharacters = document.getElementById('villains');
	let villainFilepath = "villains/";
	let villainArray = ["batman.png", "hitman2.png", "magickMonster.png", "robot.png", 
						"hitman9.png", "knight2.jpg", "cyborg2.png"];

	let isFirst = true;

	//randomly select a hero and a villain pair to display on VS page
	const randomize = () => {

		let heroNum = Math.floor(Math.random()*7);
		let villainNum = Math.floor(Math.random()*7);

		//after first two images are displayed, change interval at function is called to change pictures
		if(isFirst){
			isFirst = false;

			heroCharacters.src = filepath3 + heroFilepath + heroArray[heroNum];

			villainCharacters.src = filepath3 + villainFilepath + villainArray[heroNum];

			clearInterval(genRandom);
			genRandom = setInterval(randomize, 2000);
		}

		else{
			heroCharacters.src = filepath3 + heroFilepath + heroArray[heroNum];

			villainCharacters.src = filepath3 + villainFilepath + villainArray[heroNum];
		}
	}

	//delay when the first change is made to account for other animations on the page
	let genRandom = setInterval(randomize, 10000);