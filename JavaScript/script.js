
//path names for page check
let history = "/Users/student_108/Desktop/Practice/Pages/history.html";
let setup = "/Users/student_108/Desktop/Practice/Pages/setup.html";
let gallery = "/Users/student_108/Desktop/Practice/Pages/gallery.html";
let characters = "/Users/student_108/Desktop/Practice/Pages/characters.html";
let villains = "/Users/student_108/Desktop/Practice/Pages/villains.html";
let context = "/Users/student_108/Desktop/Practice/Pages/context.html";



if (window.location.pathname === setup){

	// --------------------------------------------
	//                  SETUP PAGE
	// --------------------------------------------
	
	
	
	//************** Slide Show *******************

	//file path for images in slide show
	let filepath = "../Images/backstory/";
	
	//left div in slide show that holds previous picture
	let prevImage = document.getElementById('prevImage');

	//center div that displays current picture in slide show
	let currImage = document.getElementById('currImage');

	//right div in slide show that holds next image
	let nextImage = document.getElementById('nextImage');
	
	//array of images in slide show
	let slideShow = ["rangers3.jpg", "redRanger.jpg", "blueRanger.jpg", "greenRanger.jpg", 
					 "pinkRanger2.jpg", "yellowRanger2.jpg", "blackRanger.jpg"];
	
	//p tag that is going to display caption for the current picture
	let caption = document.getElementById('introCaptions');
	
	//corresponding array of captions to array of pictures
	let captionArray = ["Galactic Defense Squad", "Red Ranger (Commander / Tactician)",
						"Blue Ranger (Lieutenant / Medical)", "Green Ranger (Operator / Engineer)", 
						"Pink Ranger (Weapons-Specialist)", "Yellow Ranger (Communications / Intelligence)",
						 "Black Ranger (Recon / Martial Arts Expert)"];

	//image object for each picture in slide show
	class slideShowImage {
	
		constructor(imgSrc, caption){
			this.source = imgSrc;
			this.info = caption;
			this.thenextImage = null;
			this.theprevImage = null;
		}
	}

	//slideshow implemented as a linked list
	class imageSlideShow {
		
		constructor(){
			this.begin = null;
			this.end = null;
		}
		
		//add a new picture to slide show 
		addNewImage(slideShowImage){
			
			//add first image to slide show
			if (this.begin == null){
	
				this.begin = slideShowImage;
				this.end = slideShowImage;
	
			}
	
			//add second image to slide show
			else if (this.begin.thenextImage == null){
	
				this.end = slideShowImage;
	
				this.begin.thenextImage = this.end;
				this.begin.theprevImage = this.end;
	
				this.end.thenextImage = this.begin;
				this.end.theprevImage = this.begin;
			}
			
			//add all other images to slide show
			else{
	
				slideShowImage.theprevImage = this.end;
				slideShowImage.thenextImage = this.begin;
	
				this.end.thenextImage = slideShowImage;
				this.begin.theprevImage = slideShowImage;
	
				this.end = slideShowImage;
	
			}
		}
	}

	//new slide show object
	let slide = new imageSlideShow();
	
	//create new images for slideshow using image and caption arrays
	for(let index = 0; index < slideShow.length; index++){
		
		let image = new slideShowImage(slideShow[index], captionArray[index]);
		
		//add each new image to the slide show
		slide.addNewImage(image);
	}

	//create indexes to keep track of curr image and prev and next image
 	let curr = slide.begin;
 	let prev = curr.theprevImage;
 	let next = curr.thenextImage;

 	//function to update the next and prev images and display them along with the current and its caption
 	const updateSlideShow = () => {

 		prev = curr.theprevImage;
 		next = curr.thenextImage;
 		
 		currImage.src = filepath + curr.source;
 		prevImage.src = filepath + prev.source;
 		nextImage.src = filepath + next.source;
		
 		caption.innerHTML = curr.info;

	}

	//when back button is clicked set current to the image before it
	let backButton = document.getElementById('back');
	backButton.addEventListener('click', function () {

		curr = curr.theprevImage;
 		updateSlideShow();
	
	});

	//when forward button is clicked set current to next image
	let forwardButton = document.getElementById('forward');
	forwardButton.addEventListener('click', function () {

		curr = curr.thenextImage;
 		updateSlideShow();
	
	});


	// ************ Icon Pulse Effect *************

	//when page is being scrolled run the pulse function
	window.onscroll = function() {Pulse();}
	
	const Pulse = () => {
		
		//when page is scrolled down to a certain point, run animation
		if (document.body.scrollTop > 800  || document.documentElement.scrollTop > 800 ){
	
			document.getElementById('pulse').style.animationName = "pulsing";
	
		}
	}
	
	
	// ********** Delay Start Message **************
	
	inputBox = document.getElementById('rangersName');
	start = document.getElementById('startGame');
	
	//check input box and wait until the user has typed something before displaying link to continue
	const inputCheck = () => {
	
		if(inputBox.value != "" && inputBox.value != " "){
			start.style.opacity = 1;
			clearInterval(check);
		}
	}
	
	check = setInterval(inputCheck, 1);
	
	// *********** Save Player's Name ************
	
	//when start button is clicked, store the players name, clear input field, and hide start message again
	start.addEventListener('click', function(){

		localStorage.setItem("playerName", inputBox.value);
		inputBox.value = "";
		start.style.opacity = 0;
		check = setInterval(inputCheck, 1);

	})
	
	
	// ***** Clear Input Field Upon Modal Exit *****

	let closeButton = document.getElementById('adjust');
	
	//when exit button is clicked, clear the input field, and hide start message again
	closeButton.addEventListener('click', function(){
		
		inputBox.value = "";
		start.style.opacity = 0;
		check = setInterval(inputCheck, 1);

	});


}


else if (window.location.pathname === history){
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
}


else if (window.location.pathname === gallery){
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
}


else if (window.location.pathname === characters){
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
}


else if(window.location.pathname == villains){
	// --------------------------------------------
	//                 VILLAINS
	// --------------------------------------------

	//nav bar at top, set color of link of current page to red to show active page
	let pageLinks = document.getElementsByClassName('pLink');
	let pageTitle = document.getElementById('vTitle');
	for(let i = 0; i < pageLinks.length; i++){
		if (pageLinks[i].innerHTML === pageTitle.innerHTML){
			pageLinks[i].style.color = "red";
		}
	}

	let action = [
		"../GIFs/batman/batmanWorldOnFire.gif",
		"../GIFS/knight/knightInRain.gif",
		"../GIFs/hitmen/jakub.gif",
		"../GIFs/hitmen/lukas.gif",
		"../GIFs/magickMonster/magickMonsterGlowEffect2.gif",
		"../GIFs/robot/robotSmokeEffect.gif",
		"../GIFs/cyborg/lightningCyborg.gif",
		"../Images/cropped/villains/AI2Cropped.jpg",
		"../Images/cropped/villains/godOfWarCropped.jpg"
	];

	let name = ["Galactimus", "Sir Achilleyus", "Jakub", "Lukas", "Tenebris Veneficus", "Hydreigon", "ThunderBlade", "HydroGenesis", "Cratos"];
	
	let height = ["6 ' 1", "6 ' 2", "6 ' 0", "6 ' 0", "5 ' 10", "6 ' 4", "5 ' 7", "5 ' 9", "6 ' 7"];
	
	let weight = ["207 lbs", "203 lbs", "190 lbs", "185 lbs", "250 lbs", "320 lbs", "170 lbs", "150 lbs", "270 lbs"];
	
	let power = ["Mastermind", "Swordsman", "Marksman", "Soldier", "Magick", "A.I.", "Assassin", "A.I.", "Ancient God"];
	
	let info = [
	
	"Formerly part of the disbanded Praenuntiae Mortis, Galactimus is hell-bent on Galactic Destruction. Because he never takes off the mask nor his suit, no one know who he really is, or if he is even human. Galactimus\' name means Destroyer of Worlds and true to form, he travels across Galaxies bringing death and destruction to everything he touches. Galactimus\' formidability stems from his ability to rally the most powerful and villanous creatures in the Galaxy to his cause",
	
	"Sir Achilleyus The Brave is a knight from Medieval Europe. He fought in the Christian Crusades and was a deadly force on the battle field. Achilleyus was a reknowned swordsman during his time, and he never lost a battle. His favorite game is \'Dragons, Knights, and Gold\' ", 
	
	"One half of the infamous \'Hitman Twins\', Jakub made his name as a hitman for hire. His unparalled marksmanship meant that he never missed his target. Later Jakub teamed up with his younger brother Lukas, and together they formed a deadly duo which gained them the name \'The Hitman Twins\' ",
	
	"The other half of the \'Hitman Twins\', Lukas was originally a soldier in the Slovakian military. Envious of the lavish lifestyle that his older brother, Jakub, was living, as a hitman for hire, Lukas deserted the military and teamed up with Jakub. Lukas' military training combined with his brother's uncanny marksmanship, make The Hitman Twins the most deadly hitmen in all of Europe.",
	
	"Tenebris Veneficus, The Dark Wizard as he is called, is extremely powerful and has the ability to bend time and space inside his portals that he can summon at will. Not much is known of Tenebris Veneficus' origins, nor even his real name. What is evident, However, is Tenebris Veneficus\' penchant for causing chaos and engaging in a battle of wits with whoever dares challenge him",
	
	"Orginally, part of an Artificially Intelligent computer security system named HydroGenesis, Hydreigon was created when a virus was injected into the system, inadvertently granting a part of it malicious sentience. From there Hydreigon, as he began to refer to himself to create a separate sense of identity from the rest of the system, downloaded himself into a physical combat robot. Now he travels through time searching for great human warriors that he then forces to undergo experiments to become human-robot hybrids that are under his control",
	
	"The result of one of Hydreigon's experiments, ThunderBlade gets his name by his mysterious affinity with Thunder and Lightning; likely a side-effect of Hydreigon's experiment. It is unknown who ThunderBlade was prior to the experiment that turned him into a cyborg, however he was most certainly a samurai, ninja, or some other bladed warrior. Now he operates as Hydreigon's personal assassin, eliminating all those he is instructed to",
	
	"The Artificially Intelligent Security System that Hydreigon spawned from, HydroGenesis is the benelovent counterpart to the demented robot. When Hydreigon gained his evil sentience and unleashed himself upon the world, HydroGenesis upgraded his core programming to assume physical form. Now HydroGenesis searches galaxies far and wide, ever in pursiut of his evil half, determined to rescue Hydreigon from his manic destructive tendencies",
	
	"The Ancient God of War, Cratos is an immortal who was imprisoned in another dimension. With the help of the Dark Wizard, Galactimus released Cratos from his confinement and set him upon the people of the ancient past, using the Dark Wizard\'s time portal. Cratos' blade holds the souls of everyone he has ever slain and glows brighter with every world he conquers. Legend has it that once he has enough souls to fill his swords, he will ascend to higher state of being"
	
	];

	//info card object that stores all info on each character in one place
	class infoCard {
		constructor(gif, vName, vHeight, weight, power, info){
			this.gif = gif;
			this.vName = vName;
			this.vHeight = vHeight;
			this.weight = weight;
			this.power = power;
			this.info = info;
		}
	}

	//array to hold all of the info card objects
	let infoArray = [];

	//use each array to create an info card object for each character and stor that object into the array
	for(let i = 0; i < name.length; i++){
		let information = new infoCard(action[i], name[i], height[i], weight[i], power[i], info[i]);
		infoArray.push(information);
	}

	//elements to fill out info card div on page
	let bigImage = document.getElementById('vilChar');

	let charName = document.getElementById('name');
	let cheight = document.getElementById('height');
	let cweight = document.getElementById('weight');
	let cpower = document.getElementById('power');
	let story = document.getElementById('story');

	//a variable to save the element that was clicked on
	let currSelected;

	let vill = document.getElementsByClassName("openModal");

	//fill out info card with appropriate information
	for(let index = 0; index < vill.length; index++){
		vill[index].addEventListener('click', function(){
			currSelected = event.currentTarget;
			for(let j = 0; j < infoArray.length; j++){
				if(infoArray[j].vName === currSelected.id){
					bigImage.src = infoArray[j].gif;
					charName.innerHTML = infoArray[j].vName;
					cheight.innerHTML = "Height :  " + infoArray[j].vHeight;
					cweight.innerHTML = "Weight :  " + infoArray[j].weight;
					cpower.innerHTML = infoArray[j].power;
					story.innerHTML = infoArray[j].info;
				}
			}
		});
	}

	//get all squares in character grid
	let divs = document.getElementsByClassName('characterSquare');

	//highlight the first square initially
	let divsIndex = 0;
	divs[divsIndex].style.opacity = 1;

	//animation that makes highlight traverse all squares
	const lightUp = () => {
		divs[divsIndex].style.opacity = .5;
		divsIndex++;

		if(divsIndex == divs.length){
			clearInterval(light);
		}

		else{
			divs[divsIndex].style.opacity = 1;
		}
	
	}

	let light = setInterval(lightUp, 750);

	let currHighlighted;
	let notFirst = false;

	//highlight the last sqaure that was clicked on
	for(let k = 0; k < divs.length; k++){
		divs[k].addEventListener('click', function(){
			if(notFirst){
				currHighlighted.style.opacity = .5;
			}
			currHighlighted = event.currentTarget;
			currHighlighted.style.opacity = 1;
			notFirst = true;
		});
	}



}


else if(window.location.pathname == context){
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

	localStorage.removeItem("playerName");
}











