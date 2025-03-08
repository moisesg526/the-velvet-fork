document.querySelector("#about").addEventListener("click", aboutSec);

function aboutSec() {
  let aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("div", "aboutDiv");

  let h2 = document.createElement("h2");
  h2.textContent = "Our Journey"
  aboutDiv.appendChild("h2")


}
