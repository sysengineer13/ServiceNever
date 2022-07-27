// set #image=https://whatever;content=whatever
const hash = window.location.hash;
const dict = hash
  .substr(1)
  .split(";")
  .reduce((mem, cur) => {
    const [key, val] = cur.split("=");
    mem[key] = val;
    return mem;
  }, {});

const updateImage = (image, content = "Waldo") => {
  const contentElem = document.getElementById("content");
  const grid = document.querySelector(".waldogrid");

  contentElem.textContent = content;

  grid.style.backgroundImage = `url(${image})`;
};

if (dict.image && dict.content) {
  updateImage(dict.image, dict.content);
}

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("waldosquare")) {
    target.classList.toggle("selected");
  }
});



