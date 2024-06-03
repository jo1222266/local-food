document.addEventListener('DOMContentLoaded', function() {
    // 모달을 가져옵니다
    var modal = document.getElementById("myModal");

    // 닫기 버튼을 가져옵니다
    var span = document.getElementsByClassName("close")[0];

    // 상세정보 버튼들에 이벤트 리스너를 추가합니다
    var detailButtons = document.getElementsByClassName("detail_btn");
    for (var i = 0; i < detailButtons.length; i++) {
        detailButtons[i].onclick = function() {
            modal.style.display = "block";
        }
    }

    // 닫기 버튼을 클릭하면 모달을 닫습니다
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 모달 외부를 클릭하면 모달을 닫습니다
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});