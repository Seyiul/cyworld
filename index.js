const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color:black; background-color:white; border-left:none";
  document.getElementById("menuJukebox").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
  document.getElementById("menuGame").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
};
const menuJukebox = () => {
  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
  document.getElementById("menuJukebox").style =
    "color:black; background-color:white; border-left:none";
  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
  document.getElementById("menuGame").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
};
const menuGame = () => {
  document.getElementById("contentFrame").setAttribute("src", "game.html");
  document.getElementById("menuGame").style =
    "color:black; background-color:white; border-left:none";
  document.getElementById("menuJukebox").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5; border-left:1px solid black";
};
