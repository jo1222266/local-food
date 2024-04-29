<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
	<div>
		<div>
			<h3>고객 등록</h3>
		</div>
		<form method="post">
		<div>
			<div>
				<label>고객번호:</label>
				<input type="number" name="custid">
			</div>
			
			<div>
				<label>성명:</label>
				<input type="text" name="name">
			</div>
			
			<div>
				<label>주소:</label>
				<input type="text" name="address">
			</div>
			
			<div>
				<label>전화번호:</label>
				<input type="text" name="phone">
			</div>
			
			<div>
				<button>등록</button>
			</div>
		</div>
		</form>
	</div>
</body>
</html>