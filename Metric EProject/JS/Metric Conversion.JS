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
    $("#val2").val(val1 *1e12);
  }
  else if(select1 == 1 && select2 == 6){
    $("#val2").val(val1 / 10000);
  }
  else if(select1 == 1 && select2 == 7){
    $("#val2").val(val1  * 3.861e-7);
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


// 2

  if(select1 == 2 && select2 == 1){
    $("#val2").val(val1 * 1000000);
  }
  else if(select1 == 2 && select2 == 2){
    $("#val2").val(val1 * 1);
  }
  else if(select1 == 2 && select2 == 3){
    $("#val2").val(val1 *10000000000);
  }
  else if(select1 == 2 && select2 == 4){
    $("#val2").val(val1 * 1000000000000 );
  }
  else if(select1 == 2 && select2 == 5){
    $("#val2").val(val1 * 1e18);
  }
  else if(select1 == 2 && select2 == 6){
    $("#val2").val(val1 *100);
  }
  else if(select1 == 2 && select2 == 7){
    $("#val2").val(val1  * 0.386102);
  }
  else if(select1 == 2 && select2 == 8){
    $("#val2").val(val1 * 1195990.0463011);
  }
  else if(select1 == 2 && select2 == 9){
    $("#val2").val(val1 * 10763910.41671);
  }
  else if(select1 == 2 && select2 == 10){
    $("#val2").val(val1 * 1550003100.0062 );
  }
  else if(select1 == 2 && select2 == 11){
    $("#val2").val(val1  * 247.105);
  }




// 3

if(select1 == 3 && select2 == 1){
  $("#val2").val(val1 / 10000 );
}
else if(select1 == 3 && select2 == 2){
  $("#val2").val(val1 / 10000000000);
}
else if(select1 == 3 && select2 == 3){
  $("#val2").val(val1 * 1);
}
else if(select1 == 3 && select2 == 4){
  $("#val2").val(val1 * 100 );
}
else if(select1 == 3 && select2 == 5){
  $("#val2").val(val1 * 100000000);
}
else if(select1 == 3 && select2 == 6){
  $("#val2").val(val1 / 10000 );
}
else if(select1 == 3 && select2 == 7){
  $("#val2").val(val1  / 2590000000000);
}
else if(select1 == 3 && select2 == 8){
  $("#val2").val(val1  / 8361.2736);
}
else if(select1 == 3 && select2 == 9){
  $("#val2").val(val1 / 929.0304);
}
else if(select1 == 3 && select2 == 10){
  $("#val2").val(val1 / 2.54 / 2.54 );
}
else if(select1 == 3 && select2 == 11){
  $("#val2").val(val1  / 40468564.224);
}



// 4

if(select1 == 4 && select2 == 1){
  $("#val2").val(val1 / 1000000 );
}
else if(select1 == 4 && select2 == 2){
  $("#val2").val(val1 / 1000000000000);
}
else if(select1 == 4 && select2 == 3){
  $("#val2").val(val1 / 100);
}
else if(select1 == 4 && select2 == 4){
  $("#val2").val(val1 * 1 );
}
else if(select1 == 4 && select2 == 5){
  $("#val2").val(val1 * 1000000);
}
else if(select1 == 4 && select2 == 6){
  $("#val2").val(val1  / 100000000 );
}
else if(select1 == 4 && select2 == 7){
  $("#val2").val(val1  / (1000000 * 1609.34 * 1609.34));
}
else if(select1 == 4 && select2 == 8){
  $("#val2").val(val1  / 836127.36);
}
else if(select1 == 4 && select2 == 9){
  $("#val2").val(val1 / 929.0304);
}
else if(select1 == 4 && select2 == 10){
  $("#val2").val(val1 / 645.16);
}
else if(select1 == 4 && select2 == 11){
  $("#val2").val(val1  / 4046856422.4);
}




// 5

if(select1 == 5 && select2 == 1){
  $("#val2").val(val1 * 1e-12 );
}
else if(select1 == 5 && select2 == 2){
  $("#val2").val(val1 * 1e-18);
}
else if(select1 == 5 && select2 == 3){
  $("#val2").val(val1 / 10000);
}
else if(select1 == 5 && select2 == 4){
  $("#val2").val(val1  * 1000000000000 );
}
else if(select1 == 5 && select2 == 5){
  $("#val2").val(val1  * 10000000000000000);
}
else if(select1 == 5 && select2 == 6){
  $("#val2").val(val1  *1 );
}
else if(select1 == 5 && select2 == 7){
  $("#val2").val(val1  * 0.003861);
}
else if(select1 == 5 && select2 == 8){
  $("#val2").val(val1   * 1.19599005e-12);
}
else if(select1 == 5 && select2 == 9){
  $("#val2").val(val1 * 1.076e-11);
}
else if(select1 == 5 && select2 == 10){
  $("#val2").val(val1 * 0.0000015500031);
}
else if(select1 == 5 && select2 == 11){
  $("#val2").val(val1 * 2.4710538146717e-16);
}





// 6

if(select1 == 6 && select2 == 1){
  $("#val2").val(val1 * 10000 );
}
else if(select1 == 6 && select2 == 2){
  $("#val2").val(val1 /100);
}
else if(select1 == 6 && select2 == 3){
  $("#val2").val(val1  * 100000000);
}
else if(select1 == 6 && select2 == 4){
  $("#val2").val(val1  / 1000000 );
}
else if(select1 == 6 && select2 == 5){
  $("#val2").val(val1 * 1);
}
else if(select1 == 6 && select2 == 6){
  $("#val2").val(val1  / 10000000000 );
}
else if(select1 == 6 && select2 == 7){
  $("#val2").val(val1  * 1.5500031e-19);
}
else if(select1 == 6 && select2 == 8){
  $("#val2").val(val1   * 11959.9);
}
else if(select1 == 6 && select2 == 9){
  $("#val2").val(val1 * 107639.1041671);
}
else if(select1 == 6 && select2 == 10){
  $("#val2").val(val1 * 10763910.4);
}
else if(select1 == 6 && select2 == 11){
  $("#val2").val(val1 * 2.47105);
}




// 7

if(select1 == 7 && select2 == 1){
  $("#val2").val(val1 * 2589988.11 );
}
else if(select1 == 7 && select2 == 2){
  $("#val2").val(val1 * 2.58999);
}
else if(select1 == 7 && select2 == 3){
  $("#val2").val(val1  * 25900000000);
}
else if(select1 == 7 && select2 == 4){
  $("#val2").val(val1  * 2.58999e+12 );
}
else if(select1 == 7 && select2 == 5){
  $("#val2").val(val1 * 2.58999e+15);
}
else if(select1 == 7 && select2 == 6){
  $("#val2").val(val1   * 258.998811 );
}
else if(select1 == 7 && select2 == 7){
  $("#val2").val(val1  * 1);
}
else if(select1 == 7 && select2 == 8){
  $("#val2").val(val1   * 3097600);
}
else if(select1 == 7 && select2 == 9){
  $("#val2").val(val1 * 27878400);
}
else if(select1 == 7 && select2 == 10){
  $("#val2").val(val1 * 640 * 640);
}
else if(select1 == 7 && select2 == 11){
  $("#val2").val(val1 * 640);
}


// 8

if(select1 == 8 && select2 == 1){
  $("#val2").val(val1 * 0.83612736 );
}
else if(select1 == 8 && select2 == 2){
  $("#val2").val(val1 * 8.36127e-7);
}
else if(select1 == 8 && select2 == 3){
  $("#val2").val(val1 * 8361.2736  );
}
else if(select1 == 8 && select2 == 4){
  $("#val2").val(val1 * 836127.36 );
}
else if(select1 == 8 && select2 == 5){
  $("#val2").val(val1 * 8361273600);
}
else if(select1 == 8 && select2 == 6){
  $("#val2").val(val1 * 0.0000836127 );
}
else if(select1 == 8 && select2 == 7){
  $("#val2").val(val1 / 3097600 );
}
else if(select1 == 8 && select2 == 8){
  $("#val2").val(val1   * 1);
}
else if(select1 == 8 && select2 == 9){
  $("#val2").val(val1  * 9  ); 
}
else if(select1 == 8 && select2 == 10){
  $("#val2").val(val1 * 1296 );
}
else if(select1 == 8 && select2 == 11){
  $("#val2").val(val1 / 4840 );
}




// 9

if(select1 == 9 && select2 == 1){
  $("#val2").val(val1 * 0.09290304 );
}
else if(select1 == 9 && select2 == 2){
  $("#val2").val(val1  / 10763910.4 );
}
else if(select1 == 9 && select2 == 3){
  $("#val2").val(val1 * 929.0304 );
}
else if(select1 == 9 && select2 == 4){
  $("#val2").val(val1 * 92903.04 )
}
else if(select1 == 9 && select2 == 5){
  $("#val2").val(val1 * 9290304 );
}
else if(select1 == 9 && select2 == 6){
  $("#val2").val(val1 / 107639.104 );
}
else if(select1 == 9 && select2 == 7){
  $("#val2").val(val1 / 27878400  );
}
else if(select1 == 9 && select2 == 8){
  $("#val2").val(val1  / 9  );
}
else if(select1 == 9 && select2 == 9){
  $("#val2").val(val1  * 1 ); 
}
else if(select1 == 9 && select2 == 10){
  $("#val2").val(val1* 144 );
}
else if(select1 == 9 && select2 == 11){
  $("#val2").val(val1 / 43560 );
}



// 10

if(select1 == 10 && select2 == 1){
  $("#val2").val(val1 * 0.00064516 );
}
else if(select1 == 10 && select2 == 2){
  $("#val2").val(val1 / 1.55e+9 );
}
else if(select1 == 10 && select2 == 3){
  $("#val2").val(val1 * 6.4516);
}
else if(select1 == 10 && select2 == 4){
  $("#val2").val(val1 * 645.16 )
}
else if(select1 == 10 && select2 == 5){
  $("#val2").val(val1 * 645.16  );
}
else if(select1 == 10 && select2 == 6){
  $("#val2").val(val1 * 6.4516E-8);
}
else if(select1 == 10 && select2 == 7){
  $("#val2").val(val1 / 4014489600 );
}
else if(select1 == 10 && select2 == 8){
  $("#val2").val(val1  / 1296  );
}
else if(select1 == 10 && select2 == 9){
  $("#val2").val(val1 / 144 ); 
}
else if(select1 == 10 && select2 == 10){
  $("#val2").val(val1 *1);
}
else if(select1 == 10 && select2 == 11){
  $("#val2").val(val1 / 6272640 )
}




  // 11

if(select1 == 11 && select2 == 1){
  $("#val2").val(val1 * 4046.86 );
}
else if(select1 == 11 && select2 == 2){
  $("#val2").val(val1 * 0.00404686 );
}
else if(select1 == 11 && select2 == 3){
  $("#val2").val(val1  * 40468564.224 );
}
else if(select1 == 11 && select2 == 4){
  $("#val2").val(val1 * 4046856422.4  )
}
else if(select1 == 11 && select2 == 5){
  $("#val2").val(val1 * 4046856422471000);
}
else if(select1 == 11 && select2 == 6){
  $("#val2").val(val1 * 0.404686 );
}
else if(select1 == 11 && select2 == 7){
  $("#val2").val(val1 / 640.0 );
}
else if(select1 == 11 && select2 == 8){
  $("#val2").val(val1 * 4840 );
}
else if(select1 == 11 && select2 == 9){
  $("#val2").val(val1 * 43560 ); 
}
else if(select1 == 11 && select2 == 10){
  $("#val2").val(val1 * 6272640 );
}
else if(select1 == 11 && select2 == 11){
  $("#val2").val(val1 *1 );
}

Length = [
  "Meter",
  "Kilometer",
  "Centimeter",
  "Millimeter",
  "Nanometer",
  "Micrometer",
  "Mile",
  "Yard",
  "Foot",
  "Inch",
  "Light Year"
]


if(select1 == 1 && select2 == 1){
$("#val2").val(val1 * 1);
}
else if(select1 == 1 && select2 == 2){
$("#val2").val(val1 / 1000);
}
else if(select1 == 1 && select2 == 3){
$("#val2").val(val1 * 100);
}
else if(select1 == 1 && select2 == 4){
$("#val2").val(val1 * 1000 );
}
else if(select1 == 1 && select2 == 5){
$("#val2").val(val1 * 1e9 );
}
else if(select1 == 1 && select2 == 6){
$("#val2").val(val1 * 1000000 );
}
else if(select1 == 1 && select2 == 7){
$("#val2").val(val1 * 0.000621371 );
}
else if(select1 == 1 && select2 == 8){
$("#val2").val(val1 * 1.09361);
}
else if(select1 == 1 && select2 == 9){
$("#val2").val(val1  * 3.28084);
}
else if(select1 == 1 && select2 == 10){
$("#val2").val(val1 * 39.3701 );
}
else if(select1 == 1 && select2 == 11){
$("#val2").val(val1 / 9460730472580800);
}





})




