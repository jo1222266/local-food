$(document).ready(function() {
    $(".select-date-button").click(function() {
        $(this).next(".calendar").toggle();
    });

    $(".calendar").datepicker({
        dateFormat: "yy-mm-dd", // 날짜 형식 설정
        onSelect: function(dateText) {
            $(this).prev(".select-date-button").html(
                '<img src="img/calender.png" alt="달력 아이콘" width="20px" height="20px"> ' + dateText
            );
            $(this).hide();
        }
    });
});