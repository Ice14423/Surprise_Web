
  const btnNo = document.getElementById("btn2");
  const container = document.querySelector(".button");

  btnNo.addEventListener("click", () => {
    const maxX = container.clientWidth - btnNo.offsetWidth;
    const maxY = container.clientHeight - btnNo.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = "absolute";
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
    btnNo.style.transform = "translate(0, 0)"; // ลบกึ่งกลาง
  });

