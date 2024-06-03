document.addEventListener("DOMContentLoaded", function(){
    const  slider = document.querySelector('.sliders');
    let currentIndex=0;
    const slideCount = slider.children.length;
    const slideWidth = 1920;
    const slideInterval = 3000;

    setInterval(function(){
        currentIndex = (currentIndex + 1) % slideCount;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }, slideInterval);
});

window.addEventListener("wheel", (e) => {
    e.preventDefault();
},{passive : false});

let pageNumber = 0;

$(window).on("wheel", function(e){
    if ($('html').is(":animated")) return;
    if(e.originalEvent.deltaY > 0){
        if(pageNumber >= 6) return; //6은 content 갯수
        pageNumber ++;
    }else if (e.originalEvent.deltaY < 0){
        if(pageNumber <= 0) return;
        pageNumber --;
    }
    $('html').stop().animate({
        scrollTop: window.innerHeight * pageNumber
    });
});

//무한 롤링
const bannerList = document.querySelector('.rolling-list')
const bannerItems = document.querySelectorAll('.image-wrap');
const numBanners = bannerItems.length;

for (let i = 0; i < numBanners; i++){
    bannerList.appendChild(bannerItems[i].cloneNode(true));
}

// 배너 하나의 너비를 계산
const bannerWidth = bannerItems[0].offsetWidth;
// 배너 리스트의 너비를 설정
bannerList.style.width = `${bannerWidth * numBanners * 2 + 10 * (numBanners * 2 -1)}px`;

//현재 배너 위치와 마지막으로 애니메이션을 실행한 시간을 저장
let currentPos = 0;
let lastTime = 0;

function animate(timestamp){
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    currentPos -= (bannerWidth + 10) * delta / 1000;
    // 만약 배너 리스트가 전부 왼쪽으로 이동했다면, 처음 위치로 이동
    if (currentPos <= -(bannerWidth + 10) * numBanners) {
      currentPos = 0;
    }

    bannerList.style.transform = `translateX(${currentPos}px)`;

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);