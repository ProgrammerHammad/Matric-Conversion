$(".nav-link").click(function(){
    var divid = $(this).text();
    $("#"+divid).css("display","block");
    $(this).classList.remove('select');
    
})