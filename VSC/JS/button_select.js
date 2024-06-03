     // 현재 선택된 난이도와 지역을 저장하는 변수
     let currentDifficulty = 'all';
     let currentRegion = 'all';
 
     // 모든 버튼에 대해 이벤트 리스너를 추가하는 함수
     function initializeButtons() {
         // 지역 버튼들
         const regionButtons = document.querySelectorAll('.right_1 .button_all, .right_1 .button_dif');
         regionButtons.forEach(button => {
             button.addEventListener('click', function() {
                 setSelectedButton(regionButtons, this);
                 currentRegion = this.innerText; // 선택된 지역 저장
                 filterItems(currentRegion, currentDifficulty);
             });
         });
 
         // 난이도 버튼들
         const difficultyButtons = document.querySelectorAll('.right_2 .button_all, .right_2 .button_dif');
         difficultyButtons.forEach(button => {
             button.addEventListener('click', function() {
                 setSelectedButton(difficultyButtons, this);
                 currentDifficulty = this.innerText; // 선택된 난이도 저장
                 filterItems(currentRegion, currentDifficulty);
             });
         });
 
         // 초기화 버튼
         const clearButton = document.querySelector('.clear_btn');
         clearButton.addEventListener('click', function() {
             // 버튼 상태 초기화
             setSelectedButton(regionButtons, null);
             setSelectedButton(difficultyButtons, null);
             currentRegion = 'all';
             currentDifficulty = 'all';
             filterItems(currentRegion, currentDifficulty);
             document.getElementById('searchInput').value = ''; // 검색 입력란 초기화
         });
     }
 
     // 선택된 버튼에 클래스를 추가하고 다른 버튼들에서는 제거하는 함수
     function setSelectedButton(buttons, selectedButton) {
         buttons.forEach(button => {
             if (button === selectedButton) {
                 button.classList.add('selected');
             } else {
                 button.classList.remove('selected');
             }
         });
     }
 
     // 필터링 함수 (필터링 로직을 여기에 추가하세요)
     function filterItems(region, difficulty) {
         // 필터링 로직 구현
         console.log(`Filtering items with region: ${region}, difficulty: ${difficulty}`);
     }
 
     // 페이지가 로드되면 초기화 함수 실행
     window.onload = initializeButtons;