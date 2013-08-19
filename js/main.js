var lm = lm || {};

lm.debugMode = true; //set to true to see console logs of variables
lm.i = 0; //handy counter for debugging

lm.prevHands = 0;
lm.prevFingers = 0;

lm.hands = 0;
lm.fingers = 0;

lm.changed = function() {
	return (lm.hands != lm.prevHands) || (lm.fingers != lm.prevFingers) ;
}

lm.updateView = function() {
	$('#numHands').html(lm.hands);
	$('#numFingers').html(lm.fingers);
}

lm.main = function() {
	Leap.loop(function(obj) {

		//store previous hand/finger count
		lm.prevHands = lm.hands;
		lm.prevFingers = lm.fingers;

		//count hands
		lm.hands = obj.hands.length;

		//count fingers if there's at least one hand
		if(lm.hands > 0) {
			lm.fingers = obj.fingers.length;
		}


		if(lm.changed() && lm.debugMode)
		{
			console.log(obj);
			console.log("%clm.hands: " + lm.hands, "background-color:black;color:white;font-size:150%");
			console.log("%clm.fingers: " + lm.fingers, "background-color:black;color:white;font-size:150%");
		};

		if(lm.changed())
			lm.updateView(); //IT'S FUNCTION NAMES LIKE THIS THAT MAKE ME WISH I'D WRITTEN THIS APP WITH ANGULAR
	})
};

$(document).ready(lm.main);