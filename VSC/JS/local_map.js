document.addEventListener('DOMContentLoaded', function() {

    var mapContainer = document.getElementById('map');
    var mapOption = { 
        center: new kakao.maps.LatLng(36.20535, 127.9779692), // 초기 중심 좌표 (서울)
        level: 12 // 초기 확대 수준
    }; 

    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {
            content: '<div style="width:300px">수원축산농협 로컬푸드직매장 곡반정점</div>', 
            address: '경기 수원시 권선구 곡반정로 121 (곡반정동) 수원축산농협'
        },
        {
            content: '<div style="width:200px">내남농협 로컬푸드직매장</div>', 
            address: '경북 경주시 내남면 이조중앙길 14 (이조리)'
        },
        {
            content: '<div style="width:250px">동광양농협 로컬푸드코너 제철점</div>', 
            address: '전남 광양시 폭포사랑길 99 (금호동, 백운쇼핑센터)'
        },
        {
            content: '<div style="width:240px">강서농협 로컬푸드직매장 마곡점</div>', 
            address: '서울 강서구 양천로30길 123-28 (마곡동) 강서농협 마곡지점'
        },
        {
            content: '<div style="width:240px">여천농협 로컬푸드코너 안산점</div>', 
            address: '전남 여수시 소호로 659 (안산동, 부영맨션) 여천농협 안산지점'
        },
        {
            content: '<div style="width:200px">진양농협 로컬푸드직매장</div>', 
            address: '경남 진주시 일반성면 동부로 1947 (창촌리) 진양농협'
        },
        {
            content: '<div style="width:230px">안양원예농협 로컬푸드직매장</div>', 
            address: '경기 시흥시 수인로 2411 (논곡동) 안양원예농협 로컬푸드직매장'
        },
        {
            content: '<div style="width:200px">삽교농협 로컬푸드직매장</div>',
            address: '충남 예산군 삽교읍 예목로 171 (신리, 삽교농협 내포농수산물 종합유통센터)'
        },
        {
            content: '<div style="width:200px">청남농협 로컬푸드직매장</div>',
            address: '충북 청주시 상당구 남일면 단재로 461 (효촌리, 청남농협)'
        }
    ];

    var imageSrc = 'https://nhlocalfood.com/images/icon/nh_pin.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(45, 55), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    for (var i = 0; i < positions.length; i++) {
        // 주소로 좌표를 검색합니다
        (function(position) {
            geocoder.addressSearch(position.address, function(result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords,
                        image: markerImage
                    });

                    // 마커에 표시할 인포윈도우를 생성합니다 
                    var infowindow = new kakao.maps.InfoWindow({
                        content: position.content // 인포윈도우에 표시할 내용
                    });

                    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
                } 
            });
        })(positions[i]);
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

});
