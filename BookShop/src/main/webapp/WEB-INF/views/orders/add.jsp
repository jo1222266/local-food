<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
	<div>
		<div>
			<h3>주문 등록</h3>
		</div>
		<form method="post">
		<div>
			<div>
				<label>주문번호:</label>
				<input type="number" name="orderid">
			</div>
			
			<div>
				<label>고객:</label>
				<select name="custid">
					<c:forEach var="customer" items="${customers}">
						<option value="${customer.custid}">${customer.name}</option>
					</c:forEach>
				</select>
			</div>
			
			<div>
				<label>도서:</label>
				<select name="bookid">
					<c:forEach var="book" items="${books}">
						<option value="${book.bookid}">${book.bookname}</option>
					</c:forEach>
				</select>
			</div>
			
			<div>
				<label>판매가격:</label>
				<input type="number" name="saleprice">
			</div>
			
			<div>
				<label>판매일시:</label>
				<input type="date" name="orderdate">
			</div>
			
			<div>
				<button>등록</button>
			</div>
		</div>
		</form>
	</div>
</body>
</html>