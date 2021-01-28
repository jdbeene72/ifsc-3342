$(document).ready(function() {

//$('.gallery').cycle({
//		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
//	});
	
$('.scroll-gallery').cycle({ 
    fx:      'custom', 
    cssBefore: {  
        left: 115,  
        top:  115,  
        width: 0,  
        height: 0,  
        opacity: 1, 
        display: 'block' 
    }, 
    animOut: {  
        opacity: 0  
    }, 
    animIn: {  
        left: 0,  
        top: 0,  
        width: 400,  
        height: 300 
    }, 
    cssAfter: {  
        zIndex: 0 
    }, 
    delay: -3000 
});	
	
});