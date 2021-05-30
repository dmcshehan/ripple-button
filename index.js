const btn = document.querySelector(".btn");
const ripple = document.querySelector(".ripple");

const pointerdown = ({ clientX, clientY }) => {
  const rect = btn.getBoundingClientRect();

  console.log(rect, clientX, clientY);

  ripple.style.top = `${clientY - rect.top - 200}px`;
  ripple.style.left = `${clientX - rect.left - 200}px`;
  ripple.classList.add("ripple-active");
};
const pointerup = () => {
  setTimeout(() => {
    ripple.classList.remove("ripple-active");
  }, 250);
};

btn.addEventListener("mousedown", pointerdown);
btn.addEventListener("touchstart", pointerdown);

btn.addEventListener("mouseup", pointerup);
btn.addEventListener("mouseout", pointerup);
btn.addEventListener("touchend", pointerup);
