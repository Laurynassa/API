"use strict";

const button = document.createElement("button");
button.innerText = "get photo";
document.body.appendChild(button);

let imgElement = document.createElement("img");
imgElement.style.width = "400px";
imgElement.style.height = "400px";
imgElement.style.display = "flex";
imgElement.style.flexDirection = "column";
imgElement.style.objectFit = "cover";

const getPhoto = async () => {
  const result = await fetch("https://coffee.alexflipnote.dev/random.json");
  console.log(result);

  const data = await result.json();
  console.log(data);

  imgElement.src = data.file;

  document.body.appendChild(imgElement);
};

button.addEventListener("click", getPhoto);
getPhoto();
