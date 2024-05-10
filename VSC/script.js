const bookmarkButton = document.querySelector('.bookmark');
let isFilled = false;

bookmarkButton.addEventListener('click', function() {
    isFilled = !isFilled;
    if (isFilled) {
        this.style.color = '#ff7b00'; // 클릭되었을 때의 색상
    } else {
        this.style.color = '#ffffff'; // 클릭되지 않았을 때의 색상
    }
});
