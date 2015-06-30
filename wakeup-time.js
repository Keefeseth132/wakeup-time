$(document).on('ready', function(){

var clock = $('<div class="clock"</div>')
var outerShell = $('<div class="outershell"></div>')
var innerShell = $('<div class="innershell"></div>')
var leftAM = $('<div class="leftAM"> AM </div>')
var leftPM = $('<div class="leftPM"> PM • </div>')
var clockFace = $('<div class="face"></div>')
var clockScreen = $('<div class="clock-screen"></div>')
var auto = $('<div class="auto">AUTO</div>')
var clockText = $('<div class="clock-text"></div>')
var bottomAMF = $('<div class="bottom-amf"> 100 - 200 - 300 - 400 - 500 AM </div>')
var bottomFMF = $('<div class="bottom-fmf"> 10 - 20 - 30 - 40 - 50 FM </div>')
var snooze = $('<button class="snooze-button">snooze</button>')


clock.append(outerShell)
outerShell.append(innerShell)

innerShell.append(clockFace)
innerShell.append(bottomAMF)
innerShell.append(bottomFMF)
innerShell.prepend(snooze)

clockFace.append(leftAM)
clockFace.append(leftPM)
clockFace.append(auto)
clockFace.append(clockScreen)

clockScreen.append(clockText)

$('.container').append(clock)

setInterval(function(){
	var now = new Date();
	clockText.text(now.toLocaleTimeString());
}, 1000);




})