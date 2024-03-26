// https://api.truthordarebot.xyz/v1/truth

// https://api.truthordarebot.xyz/api/dare

const truthButton = document.getElementById("truth");
const response = truthButton.addEventListener("click", getTruth);
// document.getElementById("dare").addEventListener ("click",)

function getTruth(event) {
  event.preventDefault();
  console.log("clicked");
}
