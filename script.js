$( document ).ready(function() {
    var $pic = $("#pic"); 

/*    $pic.click(function(){
        $pic.css("top", $("#pic").offset().top + 20);
         }); 
*/
    var interval = setInterval(falling, 100);
    
    function falling(){
        $pic.css("top", $("#pic").offset().top + 10);
    }
});