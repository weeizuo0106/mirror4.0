var messages = ['🔊 Hey', '🔊 Hi, there!', '🔊 Hi!', '🔊 Hello'];

if (annyang) {

	console.log("Annyang voice recognition is working!");
  // Let's define a command.
  const commands = {

	'Hi' : hello,
    'What is your name' : myname,
	'Play music' : plyMusic,
	'Pause music' : pauseMusic,
	'Play youtube' : openYoutubeVideo,
	'Pause youtube' : pauseYoutubeVideo,
	'Open alarm' : openAlarm,
	'What is the weather now' : weatherNow,
	// 'Close alarm' : closeAlarm,
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

	console.log("openAlarm function is work!")
	
	$(document).ready(function(){

		$("#alarmModal").modal('show');
		// $("alarmBtn").click(function(){
		
		// 	$('#alarmModal').modal(show);
		// })
	})

	}

	function closeAlarm () {
	console.log("closeAlarm function is work!")
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