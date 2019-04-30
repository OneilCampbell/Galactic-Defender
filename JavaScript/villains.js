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

