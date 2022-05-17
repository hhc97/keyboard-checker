$(document).ready(function() {
	$(document).on('keydown', function(event) {
		event.preventDefault();
		var key;
		if (event.key === "/") key = "slash";
		else if (event.key === " ") key = "Space";
		else if (event.key === ".") key = "punt";
		else if (event.key === ",") key = "comma";
		else if (event.key === ";") key = "semicolon";
		else if (event.key === "'") key = "quote";
		else if (event.key === "\\") key = "backslash";
		else if (event.key === "]") key = "bracketright";
		else if (event.key === "[") key = "bracketleft";
		else if (event.key === "=") key = "equal";
		else if (event.key === "-") key = "minus";
		else if (event.key === "`") key = "backquote";
		else if (event.key === "?") key = "question";
		else if (event.key === ">") key = "flexright";
		else if (event.key === "<") key = "flexleft";
		else if (event.key === "\"") key = "doublequote";
		else if (event.key === ":") key = "colon";
		else if (event.key === "|") key = "stick";
		else if (event.key === "}") key = "CurlyBracketR";
		else if (event.key === "{") key = "CurlyBracketL";
		else if (event.key === "~") key = "tilde";
		else if (event.key === "_") key = "Underscore";
		else if (event.key === "+") key = "plus";
		else if (event.key === "!") key = "exclamation";
		else if (event.key === "@") key = "at";
		else if (event.key === "#") key = "hashtag";
		else if (event.key === "$") key = "dollarsign";
		else if (event.key === "%") key = "percent";
		else if (event.key === "^") key = "circumflex";
		else if (event.key === "&") key = "and";
		else if (event.key === "*") key = "asterisk";
		else if (event.key === "(") key = "roundbracketleft";
		else if (event.key === ")") key = "roundbracketright";
		else key = event.key;
		console.log(key)
		$('.'+key).removeClass('active');
		$('.'+key).addClass('press');
		if (key === "CapsLock") {						//for Firefox
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "quote") {							//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "doublequote") {					//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "backquote") {						//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}

	});


$(document).on('keyup press', function(event) {
		event.preventDefault();
		var key;
		// var audio = new Audio('easteregg.mp3');
		if (event.key === "/") key = "slash";
		else if (event.key === " ") key = "Space";
		else if (event.key === ".") key = "punt";
		else if (event.key === ",") key = "comma";
		else if (event.key === ";") key = "semicolon";
		else if (event.key === "'") key = "quote";
		else if (event.key === "\\") key = "backslash";
		else if (event.key === "]") key = "bracketright";
		else if (event.key === "[") key = "bracketleft";
		else if (event.key === "=") key = "equal";
		else if (event.key === "-") key = "minus";
		else if (event.key === "`") key = "backquote";
		else if (event.key === "?") key = "question";
		else if (event.key === ">") key = "flexright";
		else if (event.key === "<") key = "flexleft";
		else if (event.key === "\"") key = "doublequote";
		else if (event.key === ":") key = "colon";
		else if (event.key === "|") key = "stick";
		else if (event.key === "}") key = "CurlyBracketR";
		else if (event.key === "{") key = "CurlyBracketL";
		else if (event.key === "~") key = "tilde";
		else if (event.key === "_") key = "Underscore";
		else if (event.key === "+") key = "plus";
		else if (event.key === "!") key = "exclamation";
		else if (event.key === "@") key = "at";
		else if (event.key === "#") key = "hashtag";
		else if (event.key === "$") key = "dollarsign";
		else if (event.key === "%") key = "percent";
		else if (event.key === "^") key = "circumflex";
		else if (event.key === "&") key = "and";
		else if (event.key === "*") key = "asterisk";
		else if (event.key === "(") key = "roundbracketleft";
		else if (event.key === ")") key = "roundbracketright";
		else key = event.key;
		//console.log(key);
		$('.lastkey').empty().append(key);
		$('.'+key).removeClass('press');
		$('.'+key).addClass('active');
		var keyspressed = 86 - ($('.active').length)
   		$('.test').empty().append(keyspressed);
   		var allkeys = "All your keys work!";
   		if (keyspressed === 0) $('.test').empty().append(allkeys);
   		// if (keyspressed === 10) audio.play();
	});

$(document).bind("contextmenu",function(e){
    	return false;
  	});


});

var OSName
if (navigator.appVersion.indexOf("Win") !=-1) {
	OSName="Windows";
}
else if (navigator.appVersion.indexOf("Mac") !=-1) {
	OSName="MacOS";
}
else if (navigator.appVersion.indexOf("X11") !=-1) {
	OSName="UNIX";
}
else if (navigator.appVersion.indexOf("Linux") !=-1) {
	OSName="Linux";
}

var startkey="notsure";
if (OSName==="Windows") startkey="windows";
if (OSName==="MacOS") startkey="command";

var altkey="notsure";
if (OSName==="Windows") altkey="alt";
if (OSName==="MacOS") altkey="option";

var enterkey="notsure";
if (OSName==="Windows") enterkey="enter"
if (OSName==="MacOS") enterkey="return";

var backkey="notsure";
if (OSName==="Windows") backkey="backspace"
if (OSName==="MacOS") backkey="delete";

function toggle_visibility(id) {
       var e = document.getElementById(id);
       var f = $('.container');
       var g = $('.hidenumpad');
       var h = $('.topcontainer')
       if(e.style.display === 'none') {
          e.style.display = 'inline-block';
      	  f.css("width", "1150");
      	  h.css("width", "1150");
      	  g.empty().append('Hide Numpad');
      	}
       else {
          e.style.display = 'none';
          f.css("width", "900");
          h.css("width", "900");
          g.empty().append('Show Numpad');
       }

   }
