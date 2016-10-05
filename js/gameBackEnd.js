/****
gameBackEnd.js (additional Table.prototype functions)
By fching

Requirements:
		Run the game itself

		
****/

Table.prototype.init = function() {

	this.shoe.addSingleDeck();
	this.shoe.shuffle(40);
		console.log("1 Single Deck added to Shoe.  40 shuffles made.");

	//Tracking
		ga('send', {
			hitType: 'event',
			eventCategory: 'table',
			eventAction: 'initialize',
			eventLabel: 'table-initialize'
		});
};

Table.prototype.dealAll = function() {
	var numOfCards = 2;

		this.moveCard(this.shoe,this.house.hand);
		this.moveCard(this.shoe,this.player.hand);
		this.moveCard(this.shoe,this.house.hand);
		this.moveCard(this.shoe,this.player.hand);
			//console.log("2 Cards dealt to House. 2 Cards dealt to Player.");

	//Tracking
		ga('send', {
			hitType: 'event',
			eventCategory: 'table',
			eventAction: 'deal-game',
			eventLabel: 'table-deal-game'
		});
};

Table.prototype.playHand = function(theHand) {
	var busted = false;
	var failsafe = 0;
	while(!busted){

	//Display Hand and Update Hand Value Text
	this.displayHand("#player1-card",theHand);
	this.displayHandValue("#player-hand-value",theHand);

	//Check if hand is busted
		if(theHand.getValHard() > 21){
			if(theHand.getValSoft() > 21){
			busted = true;

			//Tracking
				ga('send', {
					hitType: 'event',
					eventCategory: 'game',
					eventAction: 'busted',
					eventLabel: 'game-busted'
				});

			return false;
			}
		}
		else if(failsafe>21){
			console.log("Looped 21 times - ERROR. Exiting loop");
			busted = true;

			//Tracking
				ga('send', {
					hitType: 'event',
					eventCategory: 'game',
					eventAction: 'busted',
					eventLabel: 'game-error-failsafe'
				});

			return false;
		}
	//Hand is still valid. Prompt action.

		//Prompt for action

		var answer = confirm("Soft value is " + theHand.getValSoft()
					+". Hard value is " + theHand.getValHard()
					+". Want to hit?");
		if(answer){
			this.moveCard(this.shoe,theHand);
			//adds card then sends back to top of the while(!busted) loop


		}
		else{
			console.log("Standing on "+theHand.getValSoft());

			//Tracking
				ga('send', {
					hitType: 'event',
					eventCategory: 'game',
					eventAction: 'player-stands',
					eventLabel: 'game-player-stands'
				});
			return true;
		}
		

		/*
		var handValue = this.player.hand.getDisplayValue();
		var text = "Best value is " + handValue + ".  Hit or Stand?";
		var hitButtonHtml = "<br><button onclick = table.moveCard(table.shoe,table.player.hand)>Hit</button>";
		var standButtonHtml = "<button onclick = return true>Stand</button>";
			
		$('#action-display').html(text + hitButtonHtml + standButtonHtml);
			//console.log(actionString+" should have printed");
		failsafe++;
		*/

	}
};

Table.prototype.playHandAuto = function(theHand) {
//No tracking - this helper func is for the dealer to autoplay

	var busted = false;
	var failsafe = 100;
	while(!busted){

	//Display Hand and Update Hand Value Text
	this.displayHand("#house-card",theHand);
	this.displayHandValue("#house-hand-value",theHand);

	//Check if hand is busted
		if(theHand.getValSoft() > 21){
			if(theHand.getValHard() > 21){
			busted = true;
			return false;
			}
		}
		else if(failsafe>100){
			console.log("Looped 100 times - ERROR. Exiting loop");
			busted = true;
			return false;
		}
	//Hand is still valid. Check if soft value is < 17 to hit automatically

		//Prompt for action
		if(theHand.getValHard() < 17){
			console.log("House hits on " + this.house.hand.getValHard() );
			this.moveCard(this.shoe,theHand);
		}
		else{
			console.log("Standing on "+theHand.getValHard());
			return true;
		}
	}
};

Table.prototype.compareHands = function() {
//No tracking - this helper func is for the dealer to autoplay
	if( !this.house.hand || !this.player.hand ) {
		console.log("House or Player's Hand not valid");
		return false;
	}

	var val_house = (this.house.hand.getValSoft()>21 ? this.house.hand.getValHard() : this.house.hand.getValSoft() );
	var val_player = (this.player.hand.getValSoft()>21 ? this.player.hand.getValHard() : this.player.hand.getValSoft() );
		console.log("House has " + val_house + ". Player has "+ val_player);

	if(val_house>val_player) {
		console.log("House is better.");
		return this.house.hand;
	}
	else if (val_house == val_player) {
		console.log("Push. No Winner.");

	}
	else {
		console.log("Player is better.");
		return this.player.hand;
	}

};

Table.prototype.runGame = function() {

	//Deal Player and House
	this.dealAll();

	//Play Player's Hand
	var isPlayerStillActive = this.playHand(this.player.hand);
		if(!isPlayerStillActive){
			console.log("Player busted. House wins.");
			this.clearTable();
			return;
		}

	//Play Dealer's Hand
	var isHouseStillActive = this.playHandAuto(this.house.hand);
		if(!isHouseStillActive){
			console.log("House busted. Player wins.");
			this.clearTable();
			return;
		}
	//Both are still alive, determine winner
	this.compareHands();

	//Clear table
	this.clearTable();
};