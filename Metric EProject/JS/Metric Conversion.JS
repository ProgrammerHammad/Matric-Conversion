 navText = "";
function handleNavClick(event) {
  event.preventDefault();

  $('.select').hide();

  navText = event.target.textContent.trim();
  const targetDiv = $('#' + navText);
  if(navText == "Temperature"){
    $("#cvtbtn").hide();
  }
  else{
    $("#cvtbtn").show();
  }


  if (targetDiv.length) {
    targetDiv.show();
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
  select1 = $("."+navText+"select1").val();
  select2 = $("."+navText+"select2").val();
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



// 2


if(select1 == 2 && select2 == 1){
  $("#val2").val(val1 *1000 );
  }
  else if(select1 == 2 && select2 == 2){
  $("#val2").val(val1 *1);
  }
  else if(select1 == 2 && select2 == 3){
  $("#val2").val(val1 * 100000 );
  }
  else if(select1 == 2 && select2 == 4){
  $("#val2").val(val1 * 1000000 );
  }
  else if(select1 == 2 && select2 == 5){
  $("#val2").val(val1 * 1e9 );
  }
  else if(select1 == 2 && select2 == 6){
  $("#val2").val(val1 * 1000000 );
  }
  else if(select1 == 2 && select2 == 7){
  $("#val2").val(val1 * 0.621371  );
  }
  else if(select1 == 2 && select2 == 8){
  $("#val2").val(val1 * 1093.61);
  }
  else if(select1 == 2 && select2 == 9){
  $("#val2").val(val1 * 3280.84 );
  }
  else if(select1 == 2 && select2 == 10){
  $("#val2").val(val1 * 39370.1);
  }
  else if(select1 == 2 && select2 == 11){
  $("#val2").val(val1 / 9460730472580.8 );
  }





// 3


if(select1 == 3 && select2 == 1){
  $("#val2").val(val1 / 100);
  }
  else if(select1 == 3 && select2 == 2){
  $("#val2").val(val1 / 100000 );
  }
  else if(select1 == 3 && select2 == 3){
  $("#val2").val(val1 * 1);
  }
  else if(select1 == 3 && select2 == 4){
  $("#val2").val(val1 * 10 );
  }
  else if(select1 == 3 && select2 == 5){
  $("#val2").val(val1 * 10000000 );
  }
  else if(select1 == 3 && select2 == 6){
  $("#val2").val(val1 * 10000 );
  }
  else if(select1 == 3 && select2 == 7){
  $("#val2").val(val1 / 160934.4);
  }
  else if(select1 == 3 && select2 == 8){
  $("#val2").val(val1 / 91.44 );
  }
  else if(select1 == 3 && select2 == 9){
  $("#val2").val(val1 / 30.48 );
  }
  else if(select1 == 3 && select2 == 10){
  $("#val2").val(val1 / 2.54);
  }
  else if(select1 == 3 && select2 == 11){
  $("#val2").val(val1 / 9.461e+17 );
  }




// 4


if(select1 == 4 && select2 == 1){
  $("#val2").val(val1 / 1000);
  }
  else if(select1 == 4 && select2 == 2){
  $("#val2").val(val1 / 1000000 );
  }
  else if(select1 == 4 && select2 == 3){
  $("#val2").val(val1  / 10 );
  }
  else if(select1 == 4 && select2 == 4){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 4 && select2 == 5){
  $("#val2").val(val1 * 1000000 );
  }
  else if(select1 == 4 && select2 == 6){
  $("#val2").val(val1 * 1000 );
  }
  else if(select1 == 4 && select2 == 7){
  $("#val2").val(val1  / 1609344 );
  }
  else if(select1 == 4 && select2 == 8){
  $("#val2").val(val1 / 914.4 );
  }
  else if(select1 == 4 && select2 == 9){
  $("#val2").val(val1  / 304.8 );
  }
  else if(select1 == 4 && select2 == 10){
  $("#val2").val(val1  / 25.4 );
  }
  else if(select1 == 4 && select2 == 11){
  $("#val2").val(val1  / (9.461e+15) );
  }

  // 5



  if(select1 == 5 && select2 == 1){
    $("#val2").val(val1 / 1e9 );
    }
    else if(select1 == 5 && select2 == 2){
    $("#val2").val(val1 / 1000000000);
    }
    else if(select1 == 5 && select2 == 3){
    $("#val2").val(val1  / 10000000 );
    }
    else if(select1 == 5 && select2 == 4){
    $("#val2").val(val1 / 1000000 );
    }
    else if(select1 == 5 && select2 == 5){
    $("#val2").val(val1 *1 );
    }
    else if(select1 == 5 && select2 == 6){
    $("#val2").val(val1   / 1000);
    }
    else if(select1 == 5 && select2 == 7){
    $("#val2").val(val1 * 6.2137e-13 );
    }
    else if(select1 == 5 && select2 == 8){
    $("#val2").val(val1  / 914400000);
    }
    else if(select1 == 5 && select2 == 9){
    $("#val2").val(val1  * 3.28084e-9);
    }
    else if(select1 == 5 && select2 == 10){
    $("#val2").val(val1  * 3.93700787e-8 );
    }
    else if(select1 == 5 && select2 == 11){
    $("#val2").val(val1 * 1.057e-25 );
    }



 // 6



 if(select1 == 6 && select2 == 1){
  $("#val2").val(val1 / 1000000 );
  }
  else if(select1 == 6 && select2 == 2){
  $("#val2").val(val1 / 1000000000 );
  }
  else if(select1 == 6 && select2 == 3){
  $("#val2").val(val1  / 10000);
  }
  else if(select1 == 6 && select2 == 4){
  $("#val2").val(val1  / 1000 );
  }
  else if(select1 == 6 && select2 == 5){
  $("#val2").val(val1 * 1000 );
  }
  else if(select1 == 6 && select2 == 6){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 6 && select2 == 7){
  $("#val2").val(val1 * 6.2137e-10 );
  }
  else if(select1 == 6 && select2 == 8){
  $("#val2").val(val1 * 0.00000109361 );
  }
  else if(select1 == 6 && select2 == 9){
  $("#val2").val(val1  * 3.28084);
  }
  else if(select1 == 6 && select2 == 10){
  $("#val2").val(val1 / 25400);
  }
  else if(select1 == 6 && select2 == 11){
  $("#val2").val(val1  * 1.057e-25 );
  }


// 7



if(select1 == 7 && select2 == 1){
  $("#val2").val(val1 * 1609.34 );
  }
  else if(select1 == 7 && select2 == 2){
  $("#val2").val(val1 * 1.60934 );
  }
  else if(select1 == 7 && select2 == 3){
  $("#val2").val(val1 * 160934.4);
  }
  else if(select1 == 7 && select2 == 4){
  $("#val2").val(val1 * 1609344 );
  }
  else if(select1 == 7 && select2 == 5){
  $("#val2").val(val1 * 1609344000000);
  }
  else if(select1 == 7 && select2 == 6){
  $("#val2").val(val1 * 1609344000 );
  }
  else if(select1 == 7 && select2 == 7){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 7 && select2 == 8){
  $("#val2").val(val1 * 1760 );
  }
  else if(select1 == 7 && select2 == 9){
  $("#val2").val(val1  * 5280 );
  }
  else if(select1 == 7 && select2 == 10){
  $("#val2").val(val1 * 63360);
  }
  else if(select1 == 7 && select2 == 11){
  $("#val2").val(val1 / 5878625373183.608 );
  }


 
  
// 8



if(select1 == 8 && select2 == 1){
  $("#val2").val(val1 * 0.9144);
  }
  else if(select1 == 8 && select2 == 2){
  $("#val2").val(val1  * 0.0009144);
  }
  else if(select1 == 8 && select2 == 3){
  $("#val2").val(val1  * 91.44);
  }
  else if(select1 == 8 && select2 == 4){
  $("#val2").val(val1  * 914.4);
  }
  else if(select1 == 8 && select2 == 5){
  $("#val2").val(val1 * 914400000);
  }
  else if(select1 == 8 && select2 == 6){
  $("#val2").val(val1  * 914400);
  }
  else if(select1 == 8 && select2 == 7){
  $("#val2").val(val1  / 1760 );
  }
  else if(select1 == 8 && select2 == 8){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 8 && select2 == 9){
  $("#val2").val(val1 * 3  );
  }
  else if(select1 == 8 && select2 == 10){
  $("#val2").val(val1 * 36);
  }
  else if(select1 == 8 && select2 == 11){
  $("#val2").val(val1  / 9.461e+15 );
  }  





// 9



if(select1 == 9 && select2 == 1){
  $("#val2").val(val1 * 0.3048 );
  }
  else if(select1 == 9 && select2 == 2){
  $("#val2").val(val1 * 0.0003048 );
  }
  else if(select1 == 9 && select2 == 3){
  $("#val2").val(val1 * 30.48);
  }
  else if(select1 == 9 && select2 == 4){
  $("#val2").val(val1  * 304.8);
  }
  else if(select1 == 9 && select2 == 5){
  $("#val2").val(val1 * 304800000 );
  }
  else if(select1 == 9 && select2 == 6){
  $("#val2").val(val1 * 304800 );
  }
  else if(select1 == 9 && select2 == 7){
  $("#val2").val(val1 / 5280 );
  }
  else if(select1 == 9 && select2 == 8){
  $("#val2").val(val1  / 3 );
  }
  else if(select1 == 9 && select2 == 9){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 9 && select2 == 10){
  $("#val2").val(val1 * 12);
  }
  else if(select1 == 9 && select2 == 11){
  $("#val2").val(val1 / 9.461e15 );
  }  




  // 10



if(select1 == 10 && select2 == 1){
  $("#val2").val(val1 * 0.0254 );
  }
  else if(select1 == 10 && select2 == 2){
  $("#val2").val(val1  * 0.0000254 );
  }
  else if(select1 == 10 && select2 == 3){
  $("#val2").val(val1 * 2.54);
  }
  else if(select1 == 10 && select2 == 4){
  $("#val2").val(val1 * 25.4 );
  }
  else if(select1 == 10 && select2 == 5){
  $("#val2").val(val1 * 25400000 );
  }
  else if(select1 == 10 && select2 == 6){
  $("#val2").val(val1  * 25400);
  }
  else if(select1 == 10 && select2 == 7){
  $("#val2").val(val1 / 63360 );
  }
  else if(select1 == 10 && select2 == 8){
  $("#val2").val(val1 / 36 );
  }
  else if(select1 == 10 && select2 == 9){
  $("#val2").val(val1 / 12 );
  }
  else if(select1 == 10 && select2 == 10){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 10 && select2 == 11){
  $("#val2").val(val1 / 1.0e18 );
  }  





 // 11



if(select1 == 11 && select2 == 1){
  $("#val2").val(val1 * 9.461e15 );
  }
  else if(select1 == 11 && select2 == 2){
  $("#val2").val(val1 * 9.461e12 );
  }
  else if(select1 == 11 && select2 == 3){
  $("#val2").val(val1 * 9.461e+17);
  }
  else if(select1 == 11 && select2 == 4){
  $("#val2").val(val1   * 9.461e+15);
  }
  else if(select1 == 11 && select2 == 5){
  $("#val2").val(val1 * 9.461e+21 );
  }
  else if(select1 == 11 && select2 == 6){
  $("#val2").val(val1  * 9.461e+21 );
  }
  else if(select1 == 11 && select2 == 7){
  $("#val2").val(val1  * 5.878625 );
  }
  else if(select1 == 11 && select2 == 8){
  $("#val2").val(val1 * 9.461e15 );
  }
  else if(select1 == 11 && select2 == 9){
  $("#val2").val(val1 * 9.461e15 );
  }
  else if(select1 == 11 && select2 == 10){
  $("#val2").val(val1 * 9.461e15);
  }
  else if(select1 == 11 && select2 == 11){
  $("#val2").val(val1 *1 );
  }  
 





  mass = [
    "Kilo Gram ",
    "Gram ",
    "Miligram",
    "Metric Ton ",
    "Long Ton",
    "Short Ton",
    "Pound",
    "Ounce",
    "Carrat",
    "Atomic Mass Unit"
  ]
  


  // 1
  if(select1 == 1 && select2 == 1){
    $("#val2").val(val1*1 );
    }
    else if(select1 == 1 && select2 == 2){
    $("#val2").val(val1 * 1000 );
    }
    else if(select1 == 1 && select2 == 3){
    $("#val2").val(val1 * 1000000 );
    }
    else if(select1 == 1 && select2 == 4){
    $("#val2").val(val1  / 1000 );
    }
    else if(select1 == 1 && select2 == 5){
    $("#val2").val(val1 * 0.000984207 );
    }
    else if(select1 == 1 && select2 == 6){
    $("#val2").val(val1 / 907.18474  );
    }
    else if(select1 == 1 && select2 == 7){
    $("#val2").val(val1 * 2.20462 );
    }
    else if(select1 == 1 && select2 == 8){
    $("#val2").val(val1 * 35.27396  );
    }
    else if(select1 == 1 && select2 == 9){
    $("#val2").val(val1  * 5000);
    }
    else if(select1 == 1 && select2 == 10){
    $("#val2").val(val1 * 6.022e26);
    }



  // 2
  if(select1 == 2 && select2 == 1){
    $("#val2").val(val1 / 1000);
    }
    else if(select1 == 2 && select2 == 2){
    $("#val2").val(val1 *1 );
    }
    else if(select1 == 2 && select2 == 3){
    $("#val2").val(val1 * 1000);
    }
    else if(select1 ==2  && select2 == 4){
    $("#val2").val(val1  / 1000000 );
    }
    else if(select1 == 2 && select2 == 5){
    $("#val2").val(val1  / 1016046.9088 );
    }
    else if(select1 == 2 && select2 == 6){
    $("#val2").val(val1 * 0.00000110231 );
    }
    else if(select1 == 2 && select2 == 7){
    $("#val2").val(val1 * 0.00220462);
    }
    else if(select1 ==2  && select2 == 8){
    $("#val2").val(val1 / 28.3495 );
    }
    else if(select1 == 2 && select2 == 9){
    $("#val2").val(val1 * 5 );
    }
    else if(select1 == 2 && select2 == 10){
    $("#val2").val(val1 * 6.022e23);
    }




  // 3
  if(select1 == 3 && select2 == 1){
    $("#val2").val(val1 / 1000000 );
    }
    else if(select1 == 3 && select2 == 2){
    $("#val2").val(val1 * 1000 );
    }
    else if(select1 == 3 && select2 == 3){
    $("#val2").val(val1 *1);
    }
    else if(select1 == 3 && select2 == 4){
    $("#val2").val(val1    / 1000000000);
    }
    else if(select1 == 3 && select2 == 5){
    $("#val2").val(val1 / 1016046908.8 );
    }
    else if(select1 == 3 && select2 == 6){
    $("#val2").val(val1  / 907185 );
    }
    else if(select1 == 3 && select2 == 7){
    $("#val2").val(val1 * 0.00000220462 );
    }
    else if(select1 == 3 && select2 == 8){
    $("#val2").val(val1  * 0.00003527396);
    }
    else if(select1 == 3 && select2 == 9){
    $("#val2").val(val1  * 0.2  );
    }
    else if(select1 == 3 && select2 == 10){
    $("#val2").val(val1 * 1.66053906660e-24);
    }



 // 4
 if(select1 == 4 && select2 == 1){
  $("#val2").val(val1 * 1000);
  }
  else if(select1 == 4 && select2 == 2){
  $("#val2").val(val1 * 1000000 );
  }
  else if(select1 == 4 && select2 == 3){
  $("#val2").val(val1 * 1000000000 );
  }
  else if(select1 == 4 && select2 == 4){
  $("#val2").val(val1 *1  );
  }
  else if(select1 == 4 && select2 == 5){
  $("#val2").val(val1 * 0.984207 );
  }
  else if(select1 == 4 && select2 == 6){
  $("#val2").val(val1 * 1.10231 );
  }
  else if(select1 == 4 && select2 == 7){
  $("#val2").val(val1  * 2204.62);
  }
  else if(select1 == 4 && select2 == 8){
  $("#val2").val(val1 * 35273.9619 );
  }
  else if(select1 == 4 && select2 == 9){
  $("#val2").val(val1 * 5000000 );
  }
  else if(select1 == 4 && select2 == 10){
  $("#val2").val(val1 * 6.02214076e29 );
  }





  // 5
  if(select1 == 5 && select2 == 1){
    $("#val2").val(val1 * 1016.05);
    }
    else if(select1 == 5 && select2 == 2){
    $("#val2").val(val1 * 1016046.9088 );
    }
    else if(select1 == 5 && select2 == 3){
    $("#val2").val(val1 * 1016046908.8);
    }
    else if(select1 == 5 && select2 == 4){
    $("#val2").val(val1  * 1.01605 );
    }
    else if(select1 == 5 && select2 == 5){
    $("#val2").val(val1 *1 );
    }
    else if(select1 == 5 && select2 == 6){
    $("#val2").val(val1  * 1.12 );
    }
    else if(select1 == 5 && select2 == 7){
    $("#val2").val(val1  * 2240);
    }
    else if(select1 == 5 && select2 == 8){
    $("#val2").val(val1 * 35840 );
    }
    else if(select1 == 5 && select2 == 9){
    $("#val2").val(val1 * 226796185.19 );
    }
    else if(select1 == 5 && select2 == 10){
    $("#val2").val(val1  * 2.73159734e26);
    }
   



    // 6
  if(select1 == 6 && select2 == 1){
    $("#val2").val(val1 * 907.18474 );
    }
    else if(select1 == 6 && select2 == 2){
    $("#val2").val(val1  * 907184.74);
    }
    else if(select1 == 6 && select2 == 3){
    $("#val2").val(val1 * 907184740);
    }
    else if(select1 == 6 && select2 == 4){
    $("#val2").val(val1  * 0.907185 );
    }
    else if(select1 == 6 && select2 == 5){
    $("#val2").val(val1  * 0.892857);
    }
    else if(select1 == 6 && select2 == 6){
    $("#val2").val(val1  *1);
    }
    else if(select1 == 6 && select2 == 7){
    $("#val2").val(val1 * 2000);
    }
    else if(select1 == 6 && select2 == 8){
    $("#val2").val(val1 * 32000 );
    }
    else if(select1 == 6 && select2 == 9){
    $("#val2").val(val1 * 907184.74 );
    }
    else if(select1 == 6 && select2 == 10){
    $("#val2").val(val1 * 2.20462e+9 );
    }







    // 7
  if(select1 == 7 && select2 == 1){
    $("#val2").val(val1 * 0.45359237);
    }
    else if(select1 == 7 && select2 == 2){
    $("#val2").val(val1 * 453.59237 );
    }
    else if(select1 == 7 && select2 == 3){
    $("#val2").val(val1 * 453592.37);
    }
    else if(select1 == 7 && select2 == 4){
    $("#val2").val(val1  * 0.00045359237 );
    }
    else if(select1 == 7 && select2 == 5){
    $("#val2").val(val1 / 2240 );
    }
    else if(select1 == 7 && select2 == 6){
    $("#val2").val(val1 / 2000 );
    }
    else if(select1 == 7 && select2 == 7){
    $("#val2").val(val1*1 );
    }
    else if(select1 == 7 && select2 == 8){
    $("#val2").val(val1 * 16 );
    }
    else if(select1 == 7 && select2 == 9){
    $("#val2").val(val1  * 2267.96 );
    }
    else if(select1 == 7 && select2 == 10){
    $("#val2").val(val1  * 2.204623 * Math.pow(10, 26) );
    }




      // 8
  if(select1 ==  8 && select2 == 1){
    $("#val2").val(val1 * 0.0283495);
    }
    else if(select1 ==  8 && select2 == 2){
    $("#val2").val(val1 * 28.3495 );
    }
    else if(select1 ==  8 && select2 == 3){
    $("#val2").val(val1 * 28349.5);
    }
    else if(select1 ==  8 && select2 == 4){
    $("#val2").val(val1  / 35273.96 );
    }
    else if(select1 ==  8 && select2 == 5){
    $("#val2").val(val1  / 35840);
    }
    else if(select1 ==  8 && select2 == 6){
    $("#val2").val(val1 / 32000 );
    }
    else if(select1 == 8  && select2 == 7){
    $("#val2").val(val1  / 16);
    }
    else if(select1 ==  8 && select2 == 8){
    $("#val2").val(val1 *1 );
    }
    else if(select1 ==  8 && select2 == 9){
    $("#val2").val(val1 * 141.747615 );
    }
    else if(select1 ==  8 && select2 == 10){
    $("#val2").val(val1 * 28.3495);
    }






    // 9
  if(select1 == 9 && select2 == 1){
    $("#val2").val(val1 * 0.0002 );
    }
    else if(select1 == 9 && select2 == 2){
    $("#val2").val(val1 * 0.2 );
    }
    else if(select1 == 9 && select2 == 3){
    $("#val2").val(val1 * 200);
    }
    else if(select1 == 9 && select2 == 4){
    $("#val2").val(val1  * 2e-7 );
    }
    else if(select1 == 9 && select2 == 5){
    $("#val2").val(val1 * 2.20462e-7 );
    }
    else if(select1 == 9 && select2 == 6){
    $("#val2").val(val1 * 0.00000022 );
    }
    else if(select1 == 9 && select2 == 7){
    $("#val2").val(val1 * 1 / 5 );
    }
    else if(select1 == 9 && select2 == 8){
    $("#val2").val(val1 * 0.007054 );
    }
    else if(select1 == 9 && select2 == 9){
    $("#val2").val(val1 *1 );
    }
    else if(select1 == 9 && select2 == 10){
    $("#val2").val(val1 *  2.0);
    }



    // 10
    if(select1 == 10 && select2 == 1){
      $("#val2").val(val1 * 1.66053906660e-27);
      }
      else if(select1 == 10 && select2 == 2){
      $("#val2").val(val1 * 1.66053906660e-24 );
      }
      else if(select1 == 10 && select2 == 3){
      $("#val2").val(val1 * 1.66054e-24 );
      }
      else if(select1 == 10 && select2 == 4){
      $("#val2").val(val1 * 1.66053906660e-27 * 1e6 );
      }
      else if(select1 == 10 && select2 == 5){
      $("#val2").val(val1 * 2.2046226218488e-9 );
      }
      else if(select1 == 10 && select2 == 6){
      $("#val2").val(val1 * 2.204623 );
      }
      else if(select1 == 10 && select2 == 7){
      $("#val2").val(val1 * 3.66086161e-27 );
      }
      else if(select1 == 10 && select2 == 8){
      $("#val2").val(val1  * 5.660388458E-26);
      }
      else if(select1 == 10 && select2 == 9){
      $("#val2").val(val1 *  0.0002 );
      }
      else if(select1 == 10 && select2 == 10){
      $("#val2").val(val1 *  1);
      }



      Temperature = [
        "Celsius",
        "Kelvin",
        "Fahrenhhiet"
      ]

      if(select1 == 1 && select2 == 1){
        $("#val2").val(val1 * 1.);
        }
        else if(select1 == 1 && select2 == 2){
        $("#val2").val(val1 + 273.15 );
        }
        else if(select1 == 1 && select2 == 3){
        $("#val2").val(val1  *(9/5) + 32);
        }

// 2

if(select1 == 1 && select2 == 1){
  $("#val2").val(val1  - 273.15);
  }
  else if(select1 == 1 && select2 == 2){
  $("#val2").val(val1 *1 );
  }
  else if(select1 == 1 && select2 == 3){
  $("#val2").val((val1   - 273.15) * 9/5 + 32);
  }


  // 3

  if(select1 == 1 && select2 == 1){
    $("#val2").val((val1 - 32) * 5 / 9);
    }
    else if(select1 == 1 && select2 == 2){
    $("#val2").val((val1 - 32) * 5/9 + 273.15 );
    }
    else if(select1 == 1 && select2 == 3){
    $("#val2").val(val1  *1);
    }



})




