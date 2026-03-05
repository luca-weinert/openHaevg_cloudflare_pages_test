let count = 0;
const btnInc = document.getElementById("btnInc");
const btnDec = document.getElementById("btnDec");
const btnReset = document.getElementById("btnReset");
const counter = document.getElementById("counter");

btnReset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});

btnInc.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

btnDec.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});   