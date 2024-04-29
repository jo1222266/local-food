<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="../header.jsp"></jsp:include>
</head>
<body>
	<div class="container">
		<div>
			<h3>도서 등록</h3>
		</div>
		<form method="post">
		<div>
			<div class="form-group mt-2">
				<label>도서번호:</label>
				<input type="number" name="bookid" class="form-control form-control-sm">
			</div>
			
			<div class="form-group mt-2">
				<label>도서명:</label>
				<input type="text" name="bookname" class="form-control form-control-sm">
			</div>
			
			<div class="form-group mt-2">
				<label>출판사:</label>
				<input type="text" name="publisher" class="form-control form-control-sm">
			</div>
			
			<div class="form-group mt-2">
				<label>가격:</label>
				<input type="number" name="price" class="form-control form-control-sm">
			</div>
			
			<div class="form-group mt-2">
				<button class="btn btn-sm btn-primary">등록</button>
				<a href="list" class="btn btn-sm btn-secondary">취소</a>
			</div>
		</div>
		</form>
	</div>
</body>
</html>