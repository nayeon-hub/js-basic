const body = document.querySelector("body");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}, ${y}`;
});
