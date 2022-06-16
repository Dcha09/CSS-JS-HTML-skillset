const eyesBtns = document.querySelector(".eyesbtns");

const Leyes = document.querySelector(".left-eye");

const Reyes = document.querySelector(".right-eye");

const headBtn = document.querySelector(".headbtn");

const Head = document.querySelector(".head");

const rightEar = document.querySelector(".right-ear");

const leftEar =document.querySelector(".left-ear");

const earBtn = document.querySelector(".earsbtn");

const noseBtn = document.querySelector(".nosebtn");

const nose = document.querySelector(".nose")



eyesBtns.addEventListener("click", () => {
    Leyes.classList.toggle("Lblink");
    Reyes.classList.toggle("Rblink"); 
});


headBtn.addEventListener("click", () => {
    Head.classList.toggle("headwobble");
    leftEar.classList.toggle("L-ear-sync");
    rightEar.classList.toggle("R-ear-sync");
});

earBtn.addEventListener("click", () => {
    if (leftEar.classList.contains(1) && leftEar.classList.contains("left-ear")) {
        rightEar.classList.toggle("R-ear-animation");
        leftEar.classList.toggle("L-ear-animation");
    } else if (leftEar.classList.contains("L-ear-sync")) {
        rightEar.classList.remove("R-ear-sync");
        leftEar.classList.remove("L-ear-sync");
        leftEar.classList.toggle("L-ear-head-simu");
        rightEar.classList.toggle("R-ear-head-simu"); 
    } else if (leftEar.classList.contains("L-ear-simu" && "left-ear") && Head.classList.contains("headwobble")) {
        rightEar.classList.remove("R-ear-head-simu");
        leftEar.classList.remove("L-ear-head-simu");
        leftEar.classList.toggle("L-ear-sync");
        rightEar.classList.toggle("R-ear-sync");
    } else {
        rightEar.classList.toggle("R-ear-animation");
        leftEar.classList.toggle("L-ear-animation");
    }
});

noseBtn.addEventListener("click", () => {
    nose.classList.toggle("noseanimation");
});

earBtn.addEventListener("click", () => {
    earBtn.classList.toggle('clicked');
});

headBtn.addEventListener("click", () => {
    headBtn.classList.toggle('clicked');
});

eyesBtns.addEventListener("click", () => {
    eyesBtns.classList.toggle('clicked');
});
noseBtn.addEventListener("click", () => {
    noseBtn.classList.toggle('clicked');
});





