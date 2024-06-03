const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");

const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");

const dimd = coverWrap.querySelector(".dimd");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
let coverHeight = coverWrap.clientHeight; //500

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;

    per = percent(scrollNum, documentHeight);
    progressBar.style.width = per + "%";

    console.log(scrollNum);

    if(scrollNum >= 500){
        header.classList.add("fixed");
    }else {
        header.classList.remove("fixed");
        coverTitle.style.top = -scrollNum / 15 + "px";
        coverWrap.style.backgroundPosition = `center ${-scroll / 10}px`;
        dimd.style.backgroundColor = `rgba(0,0,0, ${0.2 + scrollNum / 700})`;
    }
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
}