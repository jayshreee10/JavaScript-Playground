const truthButton = document.getElementById("truth");
const dareButton = document.getElementById("dare");
const textArea = document.getElementById("text");
const getTruthop = truthButton.addEventListener("click", getTruth);
const getDareop = dareButton.addEventListener("click", getDare);

async function getTruth() {
  textArea.innerHTML = "updating truth.....";
  truthButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/v1/truth");
  const data = await apiUrl.json();
  truthButton.disable = false;
  textArea.innerHTML = data.question;
}

async function getDare() {
  textArea.innerHTML = "updating dare.....";
  dareButton.disable = true;
  const apiUrl = await fetch("https://api.truthordarebot.xyz/api/dare");
  const data = await apiUrl.json();
  dareButton.disable = false;
  textArea.innerHTML = data.question;
}
