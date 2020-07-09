function noStyle() {
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
}

function changeEmoji(text) {
  document.getElementById("changeTheme").innerHTML = text;
}

function changeTooltip(text) {
  document.getElementById("changeTheme").title = text;
}

function darkStyle() {
  noStyle();
  document.styleSheets[2].disabled = false;

  var title = "Change to light mode.";
  if (document.documentElement.lang == "en")
    title = "Change to light mode.";
  else if (document.documentElement.lang == "ms")
    title = "Tukar ke mod cerah.";
  else if (document.documentElement.lang == "ms-Arab")
    title = "توکر کمود چراه.";

  changeEmoji("&#9728;");
  changeTooltip(title);
  document.getElementById("changeTheme").onclick = function() { lightStyle(); };
}

function lightStyle() {
  noStyle();
  document.styleSheets[1].disabled = false;

  var title = "Change to dark mode.";
  if (document.documentElement.lang == "en")
    title = "Change to dark mode.";
  else if (document.documentElement.lang == "ms")
    title = "Tukar ke mod gelap.";
  else if (document.documentElement.lang == "ms-Arab")
    title = "توکر کمود ݢلڤ";

  changeEmoji("&#127769;");
  changeTooltip(title);
  document.getElementById("changeTheme").onclick = function() { darkStyle(); };
}

window.onload = function() {
  darkStyle();
};
