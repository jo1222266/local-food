document.addEventListener('DOMContentLoaded', function() {
    const onlinePay = document.querySelector('.online_pay');
    const directPay = document.querySelector('.direct_pay');
    const onlineCircle = onlinePay.querySelector('.circle');
    const directCircle = directPay.querySelector('.circle');

    function clearSelection() {
        onlineCircle.classList.remove('filled');
        directCircle.classList.remove('filled');
    }

    onlinePay.addEventListener('click', function() {
        clearSelection();
        onlineCircle.classList.add('filled');
    });

    directPay.addEventListener('click', function() {
        clearSelection();
        directCircle.classList.add('filled');
    });
});