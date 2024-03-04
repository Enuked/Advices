document.getElementById("dice-image").addEventListener("click", async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceData = await response.json();
  const newAdvice = adviceData.error ? adviceData.error : adviceData.slip.advice;
  document.querySelector(".advice p").innerText = `"${newAdvice}"`;
});
