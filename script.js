// Get the modal
var modal = document.getElementById("myModal");

// Get the button and checkbox
var btn = document.getElementById("agreeBtn");
var checkbox = document.getElementById("agreeCheckbox");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page loads, show the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on the checkbox, enable/disable the button accordingly
checkbox.onclick = function() {
  btn.disabled = !checkbox.checked;
}

// When the user clicks on the agree button, close the modal
btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  window.location.href = "https://google.com/404";
}
