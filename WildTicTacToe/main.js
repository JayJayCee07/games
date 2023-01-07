/**
 * 
 */

var turn = 1;
var colourOfButton = "";
var xOrO = "";
$(document).ready(function(){
  $(".playX").mouseenter(function(){
    $(this).css("background-color", "red");								
  });  
  $(".playO").mouseenter(function(){
    $(this).css("background-color", "blue");								
  });    
  $(".playX").mouseleave(function(){
    $(this).css("background-color", "");					
  });   	
  $(".playO").mouseleave(function(){
    $(this).css("background-color", "");					
  });   	  
  $(".playX").click(function(){
	  xOrO = "X";
  });
  $(".playO").click(function(){
	  xOrO = "O";
  });  
  $(".square").mouseenter(function(){
	if(xOrO == "X" && $(this).html() == ""){
      $(this).css("background-color", "red");					
    }
    else if(xOrO == "O" && $(this).html() == ""){
      $(this).css("background-color", "blue");					
    }  
  });  
  $(".square").mouseleave(function(){
    $(this).css("background-color", "");					
  });    
  $(".square").click(function(){
	if(turn > 9){
		return;
	}
	if(xOrO == "X" && $(this).html() == ""){
		$(this).html("X");
        $(this).css("color", "red");
		turn++;
    }
    else if(xOrO == "O" && $(this).html() == ""){
		$(this).html("O");
        $(this).css("color", "blue");		
		turn++;
    }  
    displayResult(whoWins());
  });
    function whoWins() {
	
	    const elements = $(".square");
	    const content = [];
	    var winner = "";
	    for(let i = 0; i < elements.length; i++){
	        content[i] = elements[i].innerHTML;
	    }
	    //rows
	    for(let i = 0; i < elements.length; i = i + 3){
	        if(content[i] == content[i+1] && content[i+1] == content[i+2]){
	            return content[i];
	        }
	    }
	    
	    //columns
	    for(let i = 0; i < 3; i++){
	        if(content[i] == content[i+3] && content[i+3] == content[i+6]){
	            return content[i];
	        }
	    }
    
	    if(content[0] == content[4] && content[4] == content[8]){
	        return content[0];
	    }
	    else if(content[2] == content[4] && content[4] == content[6]){
	        return content[2];
	    }
		if (turn >= 10 && (winner != "X" && winner != "O")){
			return "Draw";
		}
		return;
	    
	};
	function displayResult(winner) {

		if (winner == "X" || winner == "O" || winner == "Draw"){
			if ((winner == "X" || winner == "O") && turn % 2 == 1){
				colourOfButton = "red";
			    $(".displayWinner").html("The winner is: Player 1");			
			}
			else if ((winner == "X" || winner == "O") && turn % 2 == 0){
				colourOfButton = "blue";				
			    $(".displayWinner").html("The winner is: Player 2");			
			}
			else if (winner == "Draw"){
				colourOfButton = "green";								
			    $(".displayWinner").html("It was a draw");							
			}
			$(".displayWinner").css("color", colourOfButton);	
			$(".resetButton").css("background-color", colourOfButton);				
		    turn = 10;				
		}
	};
  $(".resetButton").mouseenter(function(){
    $(this).css("background-color", "purple");	
    $(this).css("cursor", "pointer");				
  });  
  $(".resetButton").mouseleave(function(){
    $(this).css("background-color", colourOfButton);	
    $(this).css("cursor", "default");				    				
  });    	
  $(".resetButton").click(function(){
	$(".square").html("");
	$(".displayWinner").html("");
	colourOfButton = "";
    turn = 1;
    xOrO = "";
  });	
});
