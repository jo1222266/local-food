const header = document.querySelector("header"); //header 태그 고정
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

    //console.log(scrollNum);

    if(scrollNum >= 500){ //header 사이즈 400준거 -> header 부분이 보일때
        //console.log(1111111);
        header.classList.add("fixed");
    }else { //header 부분이 보이지 않을 때
        header.classList.remove("fixed");
        coverTitle.style.top = -scrollNum / 20 + "px"; //고정한걸 움직이게
        coverWrap.style.backgroundPosition = `center ${-scrollNum / 5}px`; //text 10 정도
        dimd.style.backgroundColor = `rgba(0,0,0, ${0.4 + scrollNum / 700})`;
    }
    // coverTitle.style.top = scrollNum / 20 + "px";
    // coverTitle.style.top = - scrollNum + "px";
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
}