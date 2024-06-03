IMP.init("imp76021802")

const btn = document.querySelector(".commit_btn");

const onClickPay = async () => {

    IMP.request_pay({
        pg: "kakaopay",
        pay_method: "card",
        amount: "10000",
        name: "이탈리아 파스타 만들기 체험",
        merchant_uid: `merchant_${new Date().getTime()}`,
        buyer_email: "test@example.com",
        buyer_name: "한주용",
        buyer_tel: "010-3061-2529",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456"

    },function (rsp) {
        if (rsp.success) {
            alert('결제가 정상적으로 완료되었습니다.');
            window.location.href = "http://127.0.0.1:5500/class_detail.html"; // 결제 성공 후 이동할 페이지 URL
        } else {
            alert('결제가 정상적으로 처리되지 않았습니다.');
        }
    });
};

btn.addEventListener("click", onClickPay);