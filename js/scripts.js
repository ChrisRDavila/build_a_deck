// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  let build = document.querySelector("form#deck").value;
  console.log(build);
  let deck = [];
  let cards = [2,3,4,5,6,7,8,9,10,"jack", "queen", "king", "ace"];
  let suits = ["clubs", "diamonds", "hearts", "spades"];
  let body = document.querySelector("body");

  if (build = true) {
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      deck.push(card + " of " + suit);
    });
  });

  deck.forEach(function(card) {
    let li = document.createElement("li");
    li.textContent = card;
    body.appendChild(li);
  });
}
}


window.addEventListener("load", function() {
  document.querySelector("form#deck").addEventListener("submit", handleForm);
});