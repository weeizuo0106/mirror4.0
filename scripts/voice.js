var messages = ['🔊 Hey', '🔊 Hi, there!', '🔊 Hi!', '🔊 Hello'];

if (annyang) {

	console.log("Annyang voice recognition is working!");
  // Let's define a command.
  const commands = {

	'Hello' : hello,
    'What is your name' : myname,
	'Play music' : plyMusic,
	'Stop music' : pauseMusic,
	'Play youtube' : openYoutubeVideo,
	'Pause youtube' : pauseYoutubeVideo,
	'Open alarm' : openAlarm,
	'What is the weather now' : weatherNow,
	'Close alarm' : closeAlarm,
	'Show Weather' : weatherSlide1,
	'Show news' : newsSlide2,
	'Open Youtube' : youtubeSlide3,
	'Open Music' : musicSlide4,
	'Open Calendar' : calendarSlide5,
	'Open Directory' : directorySlide6,
	// 'Stop music' : stopMusic,
	// 'Next song' : nextSong,
	// 'Previous song' : previousSong,
	// 'How is the weather today' : weatherAsking,
	// 'Open Note' : openNote,
	// 'Close Note' : closeNote, 
	// 'Breaking News' : breakingNews,
	// 'Volume down' : volumeDown,
	// 'Volume up' : volumeUp,
	// 'Show calendar' :showCalendar, 
	// 'Show directory' :showDirectory,

	
	  
	  //---Youtube---//
    // 'play youtube': function() { 
	// 	$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	// },
	// 'pause youtube': function() { 
	// 	$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	// },
	
	  //---Music---//
	// 'play music': function() { 
	// 	music.play();
	// 	playBtn.classList.toggle('pause');
	// 	disk.classList.toggle('play');
	// },
	// 'pause music': function() { 
	// 	music.pause();
	// 	//playBtn.classList.toggle('play');
	// 	//disk.classList.toggle('pause');
	// },

  };

  

  function directorySlide6 () {

	console.log("Change to slide 6 worked!");

		  $(document).ready(function(){
		  
			 $("#carouselExampleIndicators").carousel(5);
	 });

  }

  function calendarSlide5 () {

	console.log("Change to slide 5 worked!");

		  $(document).ready(function(){
		  
			 $("#carouselExampleIndicators").carousel(4);
	 });

  }

  function musicSlide4 () {

	console.log("Change to slide 4 worked!");

		  $(document).ready(function(){
		  
			 $("#carouselExampleIndicators").carousel(3);
	 });

  }

  function youtubeSlide3 () {

	console.log("Change to slide 3 worked!");

		  $(document).ready(function(){
		  
			 $("#carouselExampleIndicators").carousel(2);
			 annyang.pause();
			 
			 annyang.resume();
	 });

  }

  	function newsSlide2 () {

		console.log("Change to slide 2 worked!");

		  $(document).ready(function(){
		  
	 		
			 $("#carouselExampleIndicators").carousel(1);
	 });

	  }

  	function weatherSlide1 () {
		  console.log("Change to slide 1 worked!");

		  $(document).ready(function(){
		  
	 		
			 $("#carouselExampleIndicators").carousel(0);
	 });



	  }



  	function weatherNow() {
		  console.log("Weather is working!");

	  }

  	function openYoutubeVideo () {
		  console.log ("Youtube is playing!!");
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	  }

	  function pauseYoutubeVideo () {
		console.log ("Youtube is pausing!!");
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}

  	function plyMusic (){
		console.log("Music is playing!!");
		music.play();
		playBtn.classList.toggle('pause');
		disk.classList.toggle('play');
	  }

	  function pauseMusic (){
		console.log("Music is pausing!!");
		music.pause();
		playBtn.classList.toggle('pause');
		disk.classList.toggle('pause');
	  }

  	function openAlarm (){

	console.log("openAlarm function is work!");
	
	$(document).ready(function(){

		$("#alarmModal").modal('show');
		// $("alarmBtn").click(function(){
		
		// 	$('#alarmModal').modal(show);
		// })
	});
		}

	function closeAlarm () {

		console.log("closeAlarm function is work!");

		$(document).ready(function(){

			$("#alarmModal").modal('hide');
			// $("alarmBtn").click(function(){
			
			// 	$('#alarmModal').modal(show);
			// })
		});
		}
	

  	function hello(){
	var randomIndex = Math.round(Math.random() * messages.length);
	console.log(`%c ${messages[randomIndex]}`,'color: green; font-weight:bold;');
	}

	function myname(){
	console.log("My name is Joe!");
	}

	function openYoutubeVideo () {

		console.log ("Youtube Video running!");
			$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		
	}

	function stopYoutubeVideo () {
		console.log ("Youtube Video not runinng!");
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}