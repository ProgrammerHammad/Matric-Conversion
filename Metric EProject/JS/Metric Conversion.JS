<<<<<<< HEAD
$(".nav-link").click(function(){
    var divid = $(this).text();
    $("#"+divid).css("display","block");
    $(this).classList.remove('select');
    
})
=======
function handleNavClick(event) {
    event.preventDefault();
    
    const allSelectDivs = document.querySelectorAll('.select');
    allSelectDivs.forEach(div => div.style.display = 'none');
    
    const navText = event.target.textContent.trim();
    
    const targetDiv = document.getElementById(navText);
    if (targetDiv) {
      targetDiv.style.display = 'block';
    }
  }
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.addEventListener('click', handleNavClick));



>>>>>>> e6b2299633b920c89119e26559438e95631844e7
