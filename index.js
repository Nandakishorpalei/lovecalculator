var boy=prompt("what is your 👦 name ?");
var girl=prompt("what is your pertners 👧 name ?");
var total=Math.floor(Math.random()*40)+60;
  document.querySelectorAll("h1")[0].innerHTML="Your Name is " +boy.slice(0,1).toUpperCase()+boy.slice(1,boy.length).toLowerCase();
    document.querySelectorAll("h1")[1].innerHTML="Your Partners Name is " +girl.slice(0,1).toUpperCase()+girl.slice(1,girl.length).toLowerCase();
if(total<=79){
  document.querySelectorAll("h1")[2].innerHTML=boy+" and " +girl + " your ❤ 🥰  percentage  is " +total +"%";
}
else{
  document.querySelectorAll("h1")[2].innerHTML="wowwwww "+boy+" and " +girl +  " your ❤ 🥰 percentage is " +total +"%";
}
