var boy=prompt("what is your 👦 name ?");
var girl=prompt("what is your pertners 👧 name ?");
var total=Math.floor(Math.random()*10)+91;
var boyname=boy.slice(0,1).toUpperCase()+boy.slice(1,boy.length).toLowerCase();
var girlname=girl.slice(0,1).toUpperCase()+girl.slice(1,girl.length).toLowerCase();
  document.querySelectorAll("h1")[0].innerHTML="Your Name is " +boyname;
    document.querySelectorAll("h1")[1].innerHTML="Your Partners Name is " +girlname;
if(total<=79){
  document.querySelectorAll("h1")[2].innerHTML=boyname+" and " +girlname + " your ❤ 🥰  percentage  is " +total +"%";
}
else{
  document.querySelectorAll("h1")[2].innerHTML="wowwwww "+boyname+ " and " + girlname +  " your ❤ 🥰 percentage is " +total +"%";
}
