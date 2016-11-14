$(document).ready(function(){
  playGame();
});
var coolSound = false;
function playAesthetic () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#cool-sound')[0].play();
  }
}
function playGame() {
    $('.ryu').mouseenter(function(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    $(document).keydown(function(e){
    	if(e.keyCode == 88){
        playAesthetic();
    		$('.ryu-action').hide();
    		$('.ryu-cool').show();
    	}
    })
        $(document).keyup(function(e){
    	if(e.keyCode == 88){
        $('#cool-sound')[0].pause();
        $('#cool-sound')[0].load();
    		$('.ryu-cool').hide();
        $('.ryu-still').show();
    	}
    });
  }


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
