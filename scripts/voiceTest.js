if (annyang) {
    console.log("Annyang Voice Recognition works!!");

    const commands = {
        'Open Alarm' : openAlarm,
        'Close Alarm' : closeAlarm
    }

    function openAlarm (){

        console.log("openAlarm function is work!")
        
        $(document).ready(function(){
            $("alarmBtn").click(function(){
                $("alarmModal").modal();
            })
        })
    }

    function closeAlarm () {
        console.log("closeAlarm function is work!")
    }

    // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}