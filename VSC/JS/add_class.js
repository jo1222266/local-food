  
  
  
  
       // 초기 로드 시 모든 삭제 버튼에 이벤트 리스너 추가
       document.querySelectorAll('.delete_btn').forEach(addDeleteEventListener);

       // 삭제 버튼에 클릭 이벤트 리스너를 추가하는 함수
       function addDeleteEventListener(button) {
           button.addEventListener('click', function() {
               const rowDiv = this.closest('.row');
               if (rowDiv) {
                   rowDiv.remove();
                   // 삭제된 후 모든 단계의 번호를 조정
                   adjustStepNumbers();
               }
           });
       }

       // 단계 번호를 조정하는 함수
       function adjustStepNumbers() {
           const stepElements = document.querySelectorAll('.step');
           stepElements.forEach((stepElement, index) => {
               stepElement.textContent = 'step' + (index + 1);
               // 각 row에 대한 step 데이터 속성 업데이트
               stepElement.closest('.row').setAttribute('data-step', index + 1);
           });
       }

       // 새로운 요리 순서를 추가하는 함수
       function addCookingStep() {
           // 새로운 row 요소 생성
           const newRow = document.createElement('div');
           newRow.className = 'row';

           // 새로운 row의 innerHTML 설정
           newRow.innerHTML = `
           <div class="step_sec">

           <p class="step">새로운 단계</p>

              <div style="padding: 5px;">
              </div>

          </div>

          <div class="step_detail">
             <input type="text" class="step_input">
             <button class="delete_btn" type="button">x</button>

          </div>
           `;

           // 새로운 row를 cook_sec_body에 추가
           document.querySelector('.cook_sec_body').appendChild(newRow);

           // 새로운 delete_btn에 이벤트 리스너 추가
           addDeleteEventListener(newRow.querySelector('.delete_btn'));

           // 추가된 후 모든 단계의 번호를 조정
           adjustStepNumbers();
       }

  function addIngredient() {
            // 새 div 요소 생성
            const newDiv = document.createElement('div');
            newDiv.className = 'inputs';

            // 재료 input 생성
            const ingredientInput = document.createElement('input');
            ingredientInput.type = 'text';
            ingredientInput.placeholder = '재료';
            ingredientInput.className = 'ingre_input_1';

            // 수량 input 생성
            const quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.placeholder = '수량';
            quantityInput.className = 'ingre_input_2';

            // 삭제 버튼 생성
            const deleteButton = document.createElement('button');
            deleteButton.className = 'ingre_delete_btn';
            const deleteImg = document.createElement('img');
            deleteImg.src = 'img/X.png';
            deleteImg.alt = '삭제';
            deleteButton.appendChild(deleteImg);

            // 삭제 버튼에 클릭 이벤트 추가
            deleteButton.addEventListener('click', function() {
                newDiv.remove();
            });

            // 새로운 div에 input과 버튼 추가
            newDiv.appendChild(ingredientInput);
            newDiv.appendChild(quantityInput);
            newDiv.appendChild(deleteButton);

            // .input 컨테이너에 새 div 추가
            document.querySelector('.input').appendChild(newDiv);
        }
