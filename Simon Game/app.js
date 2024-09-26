let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");
let level = 0;

let btns = ["btn-1","btn-2","btn-3","btn-4"];

let started = false;

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log(" game started")
        started = true;
        levelup();
    }
})

function flashbtn(btnn) {
    btnn.classList.add("flash")
    setTimeout(function() {
        btnn.classList.remove("flash");
    },150)
}

function levelup() {
    level++;
    h3.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random() * 4);
    console.log(randidx);
    let randcolor = btns[randidx];
    console.log(randcolor)
    let randbtn = document.querySelector(`.${randcolor}`);

    console.log(randbtn);

    flashbtn(randbtn);
}



