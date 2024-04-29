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
			<h3>주문 목록</h3>
		</div>
		<div>
			<table border="1">
				<thead>
					<tr>
						<th>주문번호</th>
						<th>고객명</th>
						<th>도서명</th>
						<th>판매가격</th>
						<th>판매일시</th>
						<th>관리</th>
					</tr>
				</thead>
				
				<tbody>
					<c:if test="${list.size() < 1}">
						<tr>
							<td colspan="6">검색 된 주문내역이 없습니다</td>
						</tr>		
					</c:if>
					
					<c:forEach var="item" items="${list}">
						<tr>
							<td>${item.orderid}</td>
							<td>${item.name}</td>
							<td>${item.bookname}</td>
							<td><fmt:formatNumber>${item.saleprice}</fmt:formatNumber></td>
							<td><fmt:formatDate value="${item.orderdate}" pattern="yyyy년 MM월 dd일"/></td>
							<td><a href="update/${item.orderid}">변경</a> <a href="delete/${item.orderid}">삭제</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		<div>
			<a href="add"><button>등록</button></a>
		</div>
		<div>
			<a href=".."><button>처음으로</button></a>
		</div>
	</div>
</body>
</html>