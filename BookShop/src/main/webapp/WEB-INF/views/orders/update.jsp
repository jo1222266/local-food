<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
	<div>
		<div>
			<h3>주문정보 변경</h3>
		</div>
		<form method="post">
		<div>
			<div>
				<label>주문번호:</label>
				<input type="number" name="orderid" value="${item.orderid}" readonly>
			</div>
			<div>
				<label>고객:</label>				
				<select name="custid">
					<c:forEach var="customer" items="${customers}">
						<option value="${customer.custid}" ${item.custid == customer.custid ? 'selected' : ''}>${customer.name}</option>
					</c:forEach>
				</select>
			</div>
			<div>
				<label>도서:</label>				
				<select name="bookid">
					<c:forEach var="book" items="${books}">
						<option value="${book.bookid}" ${item.bookid == book.bookid ? 'selected' : ''}>${book.bookname}</option>
					</c:forEach>
				</select>
			</div>
			<div>
				<label>판매가격:</label>
				<input type="number" name="saleprice" value="${item.saleprice}">
			</div>
			<div>
				<label>판매일시:</label>				
				<input type="date" name="orderdate" value="<fmt:formatDate value="${item.orderdate}" pattern="yyyy-MM-dd"/>">
			</div>
			<div>
				<button>변경</button>
				<a href="../list"><button type="button">취소</button></a>
			</div>
		</div>
		</form>
	</div>
</body>
</html>