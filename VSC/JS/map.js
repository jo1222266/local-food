document.addEventListener('DOMContentLoaded', function() {

var mapContainer = document.getElementById('map');
var mapOption = { 
    center: new kakao.maps.LatLng(37.566535, 126.9779692), // 초기 중심 좌표 (서울)
    level: 3 // 초기 확대 수준
}; 

var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체 생성
var geocoder = new kakao.maps.services.Geocoder();

// p 태그의 주소 가져오기
var address = document.querySelector('.info p').innerText;

// 주소로 좌표를 검색
geocoder.addressSearch(address, function(result, status) {
    // 정상적으로 검색이 완료됐으면 
    if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도 중심을 결과 좌표로 이동
        map.setCenter(coords);

        // 결과 좌표에 마커를 생성하고 지도에 표시
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명 표시
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">' + address + '</div>'
        });
        infowindow.open(map, marker);
    } 
})});