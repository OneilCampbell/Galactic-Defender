
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
