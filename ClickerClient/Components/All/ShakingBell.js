window.resetBellAnimation = () => {
    console.log("resetAnimation start");
    let bell = document.querySelector("#bell");
    let gameField = document.querySelector(".gameField");
    bell.style.animation = 'none';
    bell.getClientRects() /* trigger reflow */
    bell.style.animation = "scaleBell 5000ms 1";
    bell.style.left = getRandomInt(bell.clientWidth, gameField.clientWidth - bell.clientWidth) + "px";
    bell.style.top = getRandomInt(bell.clientHeight, gameField.clientHeight - bell.clientHeight) + "px";
    console.log(bell.style.left);
    console.log(bell.style.top);
    var element = document.querySelector('#bell > .anchor');
    [...document.querySelectorAll('#bell > .anchor')].forEach(element => {
        let currentAnimation = window.getComputedStyle(element).animation;
        element.style.animation = 'none';
        element.getClientRects() /* trigger reflow */
        element.style.animation = currentAnimation;
    });
    console.log("resetAnimation end1");
}