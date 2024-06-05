window.onload = function() {
    var mapContainer = document.getElementById('map'); 
    var mapOption = {
        center: new kakao.maps.LatLng(37.362357, 126.802991), // Default center (use a default location)
        level: 1
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var geocoder = new kakao.maps.services.Geocoder();

    var address = document.getElementById('store-address').innerText;

    var imageSrc = 'https://nhlocalfood.com/images/icon/nh_pin.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(45, 55), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);


    geocoder.addressSearch(address, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage
            });

            map.setCenter(coords);
        } else {
            alert('Address not found!');
        }
    });
};
