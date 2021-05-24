const raining = () => {
  const createRain = document.createElement("i");
  createRain.className = "fas fa-tint";
  document.body.appendChild(createRain);
  console.log(createRain);
  createRain.style.left = `${Math.random() * window.innerWidth}px`;
  createRain.style.animationDuration = `${Math.trunc(Math.random() * 5 + 2)}s`;
  createRain.style.opacity = Math.random();
  createRain.style.fontSize = `${Math.random() * 15}px`;
  setTimeout(() => {
    createRain.remove();
  }, 5000);
};
setInterval(raining, 100);
