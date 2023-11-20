window.events = {
    clickElement: function (element) {
        element.click();
    }
}
//Два контекстных меню не могут быть открыты одновременно
class ContextMenuEvents {
    constructor() {
        this.runEventListeners();
    }
    runEventListeners() {
        this.hideContextMenuBox = this.hideContextMenuBox.bind(this);
        //true необходимо для того, чтобы наверняка вначале скрывалось предыдущее меню, а потом показывалось новое
        document.addEventListener("mouseup", this.hideContextMenuBox, false);
        this.showContextMenuBox = this.showContextMenuBox.bind(this);
        document.addEventListener("mouseup", this.showContextMenuBox, false);
    }
    showContextMenuBox(e) {
        let btn = e.target;
        if (btn.className == "contextMenu__btn") {
            this.contextMenuToggle = btn.previousElementSibling;
        }
    }
    hideContextMenuBox(e) {
        var _a;
        if (this.contextMenuToggle != null && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.htmlFor) != this.contextMenuToggle.id) {
            this.contextMenuToggle.checked = false;
        }
    }
    //private hideContextMenuBox(e: Event): void {

    //    if (this.contextMenuToggle != null && (e.target as HTMLLabelElement)?.htmlFor != this.contextMenuToggle.id) {
    //        this.contextMenuToggle.checked = false;
    //    }
    //}
}
var contextMenuEvents = new ContextMenuEvents();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
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