$(".result").click(function() {
    let watch = $(".watch").val();
    let number = $(".number").val();
	
    $(".endresult").show();
    $(".restart").show();
    $(".questions").hide();
    $(".result").hide();
    
    
    
    if(watch==="Yes" && number <= 3){
    $(".sga").show();  
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Shai Gilgeous-Alexander.");
    } else if (watch==="No" && number <=3){
  	$(".curry").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Steph Curry.");
    }else if (watch==="Yes" && number <= 6){
  	$(".jokic").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Nikola Jokić.");
    }else if (watch==="No" && number <=6){
  	$(".sga").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Shai Gilgeous-Alexander.");
    }else if (watch==="Yes" && number <= 8){
  	$(".curry").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Steph Curry.");
    }else if (watch==="No" && number <= 8){
  	$(".bron").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your LeBron James.");
    }else if (watch==="Yes" && number >=9){
  	$(".bron").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your LeBron James.");
    }else if (watch==="No" && number >=9){
  	$(".jokic").show();
    $("p").append("Since you said " + watch + " to watching the nba and you rated yourself a " + number + " on skills your Nikola Jokić.");
    }else {
                $("p").text("ERROR");

    }
    });

$(".restart").click(function() {
$(".endresult").hide();
$(".restart").hide();
$(".questions").show();
$(".result").show();    
});