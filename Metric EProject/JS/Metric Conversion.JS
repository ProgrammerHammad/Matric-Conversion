function handleNavClick(event) {
    event.preventDefault();
    
    const allSelectDivs = document.querySelectorAll('.select');
    allSelectDivs.forEach(div => div.style.display = 'none');
    
    const navText = event.target.textContent.trim();
    console.log(navText);
    const targetDiv = document.getElementById(navText);
    if (targetDiv) {
      targetDiv.style.display = 'block';
    }
  }
  
  const navLinks = document.querySelectorAll('#link1');
  navLinks.forEach(link => link.addEventListener('click', handleNavClick));

area = [
  "Square Meter",
  "Square Kilometer",
  "Square Centimeter",
  "Square Millimeter",
  "Square Micrometer",
  "Hecatre",
  "Square Mile",
  "Square Yard",
  "Square Foot",
  "Square Inch",
  "Acre"
]


$("#cvtbtn").click(function(){
  val1 = $("#val1").val(); 
  val2 = $("#val2").val(); 
  select1 = $(".select1").val();
  select2 = $(".select2").val();
  // select2[0] = parseInt(select2[0]) - 1;
  console.log(select2);
  if(select1 == 1 && select2 == 1){
    $("#val2").val(val1 * 1);
  }
  else if(select1 == 1 && select2 == 2){
    $("#val2").val(val1 / 1000);
  }
  else if(select1 == 1 && select2 == 3){
    $("#val2").val(val1 / 10000);
  }
  else if(select1 == 1 && select2 == 4){
    $("#val2").val(val1 * 1000000 );
  }
  else if(select1 == 1 && select2 == 5){
    $("#val2").val(val1 / 10);
  }
  else if(select1 == 1 && select2 == 6){
    $("#val2").val(val1 / 10000);
  }
  else if(select1 == 1 && select2 == 7){
    $("#val2").val(val1 / 10);
  }
  else if(select1 == 1 && select2 == 8){
    $("#val2").val(val1 * 1.196);
  }
  else if(select1 == 1 && select2 == 9){
    $("#val2").val(val1 * 10.764);
  }
  else if(select1 == 1 && select2 == 10){
    $("#val2").val(val1 * 1550);
  }
  else if(select1 == 1 && select2 == 11){
    $("#val2").val(val1 / 4047);
  }



})
