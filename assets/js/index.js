let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("load", () => {
  const pWrap = document.querySelector(".progresswrapper");
  const pBar = document.querySelector("progress");
  const pBarP = document.querySelector(".value");

  const start = new Date("April 6 2020 12:59:59 GMT+0200"),
    end = new Date("May 19 2020 12:59:59 GMT+0200");
  today = new Date();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = end.getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      const q = Math.abs(now - start);
      const d = Math.abs(end - start);

      pBar.value = Math.round((q / d) * 100);
      pBarP.innerText = `${((q / d) * 100).toFixed(2)}%`;
      pWrap.style.setProperty("--value", Math.round((q / d) * 100));

      document.getElementById("days").innerText = Math.floor(distance / day);
      // (document.getElementById("hours").innerText = Math.floor(
      //   (distance % day) / hour
      // )),
      // (document.getElementById("minutes").innerText = Math.floor(
      //   (distance % hour) / minute
      // )),
      // (document.getElementById("seconds").innerText = Math.floor(
      //   (distance % minute) / second
      // ));

      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown ul").style.display = "none";
        document.querySelector("h1").textContent = "Freedom!";
      }
    }, second);
});

const images = ["mwc4", "girl", "bugs", "dance"];

const container = document.querySelector(".wc"),
  btn = document.querySelector("button"),
  url = "./assets/img/";

let currentImg = 0;

function clickHandler() {
  currentImg = (currentImg + 1) % images.length;
  container.src = `${url}${images[currentImg]}.gif`;
}

btn.addEventListener("click", clickHandler);
