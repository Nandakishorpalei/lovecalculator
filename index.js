var boy=prompt("what is your 👦 name ?");
var girl=prompt("what is your pertners 👧 name ?");
var total=Math.floor(Math.random()*90)+10;
var boyname=boy.slice(0,1).toUpperCase()+boy.slice(1,boy.length).toLowerCase();
var girlname=girl.slice(0,1).toUpperCase()+girl.slice(1,girl.length).toLowerCase();
  document.querySelectorAll("h1")[0].innerHTML="Your Name is " +boyname;
    document.querySelectorAll("h1")[1].innerHTML="Your Partners Name is " +girlname;
if(total>=75){
  document.querySelectorAll("h1")[2].innerHTML="wowwwww "+boyname+" and " +girlname + " you both together make perfect couple.  your ❤ 🥰  percentage  is " +total +"%";
}
else if (total >=50 && total <=74){
  document.querySelectorAll("h1")[2].innerHTML="that's quite impressive  "+boyname+ " and " + girlname +  ". your ❤ 🥰 percentage is " +total +"%";
}
else if( total >=25 && total <=49){
  document.querySelectorAll("h1")[2].innerHTML="Oops "+boyname+ " and " + girlname +  " your ❤ 🥰 percentage is " +total +"%";
}
else {
  document.querySelectorAll("h1")[2].innerHTML=boyname+ " and " + girlname +  " you have to face issues. your ❤ 🥰 percentage is " +total +"%";
}
