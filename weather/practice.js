let btn = document.querySelector("button");

btn.addEventListener("click",function () {
    let h2 = document.querySelector("h2");
    h2.innerText = getRandomNo();

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomNo();

    console.log("color updated")
}) 

function getRandomNo() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
