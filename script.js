const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const loader = btn.querySelector(".loader");
const btnText = btn.querySelector(".btn-text");

form.addEventListener("submit", function(e){

e.preventDefault();  // page reload stop

loader.style.display = "block";
btnText.textContent = "Submitting...";
btn.disabled = true;

setTimeout(function(){

loader.style.display = "none";
btnText.textContent = "Submitted ✓";
btn.disabled = false;

form.reset();

}, 2000);

});