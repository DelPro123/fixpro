
// Get the modal for book
var modal = document.getElementById("book_modal");
var btn = document.getElementById("open_modal");

// Get the <span> element that closes the modal for book
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal for book
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal for the book
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it for book
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}