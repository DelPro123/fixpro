// Get the modal for book
var book_modal = document.getElementById("book_modal");
var book_button = document.getElementById("open_book_modal");
// Get the modal for Sign up
var signup_modal = document.getElementById("signup_modal");
var signup_button = document.getElementById("SignUp");
//for Sign up Bonus
var SignUpBonus = document.getElementById("signUp_Bonus");
//--------------------------------------------------------------------------
// Get the <span> element that closes the modal for book
var span_button = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal for book
book_button.onclick = function() {
  book_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal for the book
span_button.onclick = function() {
  book_modal.style.display = "none";
  book_modal=location.reload();
}
// When the user clicks anywhere outside of the modal, close it for book
window.onclick = function(event) {
  if (event.target == book_modal) {
    book_modal.style.display = "none";
    book_modal=location.reload();
  }
}
//--------------------------------------------------------------------------
// Get the <span> element that closes the modal for Sign up
var signup_close= document.getElementsByClassName("close1")[0];
// When the user clicks on the button, open the modal for Sign up
signup_button.onclick = function() {
  signup_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal for the Sign up
signup_close.onclick = function() {
  signup_modal.style.display = "none";
  signup_modal=location.reload();
}
// When the user clicks anywhere outside of the modal, close it for Sign up
window.onclick = function(event) {
  if (event.target ==signup_modal) {
    signup_modal.style.display = "none";
    signup_modal=location.reload();
  }
}
//--------------------------------------------------------------------------
// When the user clicks on the button, open the modal for Sign up Bonus
SignUpBonus.onclick = function() {
  signup_modal.style.display = "block";

}