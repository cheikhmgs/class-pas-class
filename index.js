$(".plein").click(function(){
    $(".a").addClass("blue");
    
})

$(".vide").click(function(){
    $(".a").addClass(" white");   
})


function Couleur(elm){
        var el = elm.style;
        if( el.backgroundColor == '' || el.backgroundColor == '#ffffff')
        {
          el.backgroundColor = '#ff0000';
        }else{
          el.backgroundColor = '#ffffff';
        }
    }
	
		
    	$(".x ").click(function(){
    $(" .x,.e1").addClass("blue");
    
})

    	$(".y ").click(function(){
    $(" .y,.e2").addClass("blue");
    
})


    	$(".K ").click(function(){
    $(" .K,.e3,.u").addClass("blue");
    
})

    	$(".z ").click(function(){
    $(" .z,.e4").addClass("blue");
    
})
    $(".w ").click(function(){
    $(" .w,.e5").addClass("blue");
    
    
})

