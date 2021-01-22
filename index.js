var name= ["nanda","nandu","payal","nkp","sushree","Sushree","nobody","Nobody","ronny","Ronny","pp","Nanda","Payal","NANDA","PAYAL","nanda kishor palei","payal palei","Nanda kishor palei","Payal palei","twinkle","sarita","Sarita","Bijay","SARITA","BIJAY","Twinkle","Sarita","chinku","Chinku","bijaya","Bijaya"];
var boy=prompt("what is your 👦 name ?");
var girl=prompt("what is your pertners 👧 name ?");
var total=Math.floor(Math.random()*90)+10;
var boyname=boy.slice(0,1).toUpperCase()+boy.slice(1,boy.length).toLowerCase();
var girlname=girl.slice(0,1).toUpperCase()+girl.slice(1,girl.length).toLowerCase();
var totalquote=[" Your True love stories never have endings."," you both together makes a perfect couple."," You're most alive when your partner is in your thoughts."," your Love is composed of a single soul inhabiting two bodies"," In your love the best thing  to hold onto in life is each other."," As God’s blessing enriches you both, look to each other for strength" ," A loving heart is the truest wisdom."];
var quote_no=Math.floor(Math.random()*totalquote.length);
var quotetoshow=totalquote[quote_no];
  document.querySelectorAll("h1")[0].innerHTML="Hey beautiful couple Welcome" ;
  document.querySelectorAll("h1")[1].innerHTML=  boyname +" ❤️ "+ girlname ;
 if(name.includes(boy) && name.includes(girl)){
 document.querySelectorAll("h1")[2].innerHTML="WOW " +boyname+" and " + girlname +"<br><br>" + "your love percentage is 100% <br><br> "   + quotetoshow + " <br><br>🥰🥰The perfect relationship is one where you can be weird with one another.🥰🥰";
    }
else if(total>=75){
  document.querySelectorAll("h1")[2].innerHTML="wowwwww "+boyname+" and " +girlname +" <br><br> your ❤ 🥰  percentage  is " +total +"% <br><br>" + quotetoshow ;
}
else if (total >=50 && total <=74){
  document.querySelectorAll("h1")[2].innerHTML="that's quite impressive  "+boyname+ " and " + girlname +  "<br><br> your ❤ 🥰 percentage is " +total +"% <br><br>" + quotetoshow  ;
}
else if( total >=25 && total <=49){
  document.querySelectorAll("h1")[2].innerHTML="Oops "+boyname+ " and " + girlname +  "<br><br> your ❤ 🥰 percentage is " +total +"%";
}
else {
  document.querySelectorAll("h1")[2].innerHTML=boyname+ " and " + girlname +  "<br><br> you have to face issues. your ❤ 🥰 percentage is " +total +"%";
}
