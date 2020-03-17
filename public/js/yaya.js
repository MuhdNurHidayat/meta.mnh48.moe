function showEnglish() {
  var i, contentEn, contentMs, contentJawi;
  
  contentEn = document.querySelectorAll('[lang="en-MY"]');
  for (i = 0; i < contentEn.length; i++) {
    contentEn[i].style.display = "block";
  }
  
  contentMs = document.querySelectorAll('[lang="ms"]');
  for (i = 0; i < contentMs.length; i++) {
    contentMs[i].style.display = "none";
  }
  
  contentJawi = document.querySelectorAll('[lang="ms-Arab"]');
  for (i = 0; i < contentJawi.length; i++) {
    contentJawi[i].style.display = "none";
  }
}

function showMalayL() {
  var i, contentEn, contentMs, contentJawi;
  
  contentEn = document.querySelectorAll('[lang="en-MY"]');
  for (i = 0; i < contentEn.length; i++) {
    contentEn[i].style.display = "none";
  }
  
  contentMs = document.querySelectorAll('[lang="ms"]');
  for (i = 0; i < contentMs.length; i++) {
    contentMs[i].style.display = "block";
  }
  
  contentJawi = document.querySelectorAll('[lang="ms-Arab"]');
  for (i = 0; i < contentJawi.length; i++) {
    contentJawi[i].style.display = "none";
  }
}

function showMalayA() {
  var i, contentEn, contentMs, contentJawi;
  
  contentEn = document.querySelectorAll('[lang="en-MY"]');
  for (i = 0; i < contentEn.length; i++) {
    contentEn[i].style.display = "none";
  }
  
  contentMs = document.querySelectorAll('[lang="ms"]');
  for (i = 0; i < contentMs.length; i++) {
    contentMs[i].style.display = "none";
  }
  
  contentJawi = document.querySelectorAll('[lang="ms-Arab"]');
  for (i = 0; i < contentJawi.length; i++) {
    contentJawi[i].style.display = "block";
  }
}

